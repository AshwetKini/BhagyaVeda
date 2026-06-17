import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define files associated with each page to track lastmod changes
const routesConfig = [
  {
    path: '',
    changefreq: 'weekly',
    priority: '1.0',
    files: [
      'src/App.jsx',
      'src/components/ui/Navbar.jsx',
      'src/components/ui/HeroSection.jsx',
      'src/components/ui/PromiseSection.jsx',
      'src/components/ui/IngredientsSection.jsx',
      'src/components/ui/BenefitsSection.jsx',
      'src/components/ui/ProductSizesSection.jsx',
      'src/components/ui/ResultsSection.jsx',
      'src/components/ui/HowItWorksSection.jsx',
      'src/components/ui/TestimonialsSection.jsx',
      'src/components/ui/HaveQuestionsSection.jsx',
      'src/components/ui/Footer.jsx'
    ],
    images: [
      {
        loc: 'logo.png',
        title: 'BhagyaVeda brand logo',
        caption: 'BhagyaVeda Premium Ayurvedic Hair Oil brand logo.'
      },
      {
        loc: 'bottle-label-reference.png',
        title: 'BhagyaVeda bottle packaging',
        caption: 'Premium glass packaging of BhagyaVeda Ayurvedic Hair Oil.'
      },
      {
        loc: 'bottles.jpg',
        title: 'BhagyaVeda hair oil sizes',
        caption: 'BhagyaVeda hair oil available in travel-friendly, signature, and value sizes.'
      },
      // Clinical Results - Partition Widening
      {
        loc: 'results/indian_hair_part_day0.png',
        title: 'Scalp Partition Widening Before Treatment',
        caption: 'Before treatment: Visible widening of the hair partition lines.'
      },
      {
        loc: 'results/indian_hair_part_day90.png',
        title: 'Hair Density Improvement After 90 Days',
        caption: 'After 90 days: Visible improvement in hair density and appearance with consistent use of BhagyaVeda hair oil.'
      },
      // Clinical Results - Temple Area
      {
        loc: 'results/indian_hair_temple_day0.png',
        title: 'Receding Hairline at Temples Before Treatment',
        caption: 'Before treatment: Thinning hair and receding hairline at the temple area.'
      },
      {
        loc: 'results/indian_hair_temple_day90.png',
        title: 'Temple Area Improvement After 90 Days',
        caption: 'After 90 days: Visible improvement in hair density along the temple hairline.'
      },
      // Clinical Results - Crown Area
      {
        loc: 'results/indian_hair_crown_day0.png',
        title: 'Crown Area Thinning Before Treatment',
        caption: 'Before treatment: Visible thinning and hair loss on the crown area of the scalp.'
      },
      {
        loc: 'results/indian_hair_crown_day90.png',
        title: 'Crown Area Improvement After 90 Days',
        caption: 'After 90 days: Noticeable improvement in crown area hair volume and scalp coverage.'
      },
      // Clinical Results - Postpartum Hair Loss
      {
        loc: 'results/indian_female_postpartum_day0.png',
        title: 'Postpartum Hair Thinning Before Treatment',
        caption: 'Before treatment: Frontal hairline thinning commonly associated with postpartum hair fall.'
      },
      {
        loc: 'results/indian_female_postpartum_day90.png',
        title: 'Frontal Hairline Recovery After 90 Days',
        caption: 'After 90 days: Visible recovery and sprouting of new baby hairs along the frontal hairline.'
      },
      // Ritual Steps
      {
        loc: 'ritual_step_1.png',
        title: 'Scalp oil application technique',
        caption: 'Step 1: Applying the hair oil directly to the scalp roots using the glass dropper.'
      },
      {
        loc: 'ritual_step_2.png',
        title: 'Gentle scalp massage method',
        caption: 'Step 2: Massaging the scalp in gentle circular motions to stimulate blood circulation.'
      },
      {
        loc: 'ritual_step_3.png',
        title: 'Overnight absorption step',
        caption: 'Step 3: Leaving the oil overnight as part of the recommended hair care routine.'
      },
      {
        loc: 'ritual_step_4.png',
        title: 'Hair rinsing results',
        caption: 'Step 4: Rinsing to reveal strong, soft, and healthy-looking hair.'
      }
    ]
  },
  {
    path: 'about',
    changefreq: 'monthly',
    priority: '0.8',
    files: [
      'src/components/ui/AboutPage.jsx'
    ],
    images: [
      {
        loc: 'faqimage.png',
        title: 'BhagyaVeda brand banner',
        caption: 'BhagyaVeda brand storytelling banner illustrating natural heritage.'
      },
      {
        loc: 'ashwini-tandel.png',
        title: 'Ashwini Tandel - Founder of BhagyaVeda',
        caption: 'Ashwini Tandel, the founder of BhagyaVeda, dedicated to authentic Ayurvedic formulas.'
      }
    ]
  },
  {
    path: 'faq',
    changefreq: 'weekly',
    priority: '0.8',
    files: [
      'src/components/ui/FAQPage.jsx'
    ],
    images: [
      {
        loc: 'faqimage.png',
        title: 'BhagyaVeda FAQ banner',
        caption: 'BhagyaVeda customer support and frequently asked questions banner.'
      }
    ]
  }
];

// Helper to determine the latest modification date for a page
function getLatestModifiedDate(files) {
  let dates = [];

  for (const file of files) {
    const filePath = path.resolve(__dirname, '..', file);
    if (!fs.existsSync(filePath)) continue;

    // Check if the file has unstaged or staged changes in Git
    let isModifiedLocally = false;
    try {
      const status = execSync(`git status --porcelain -- "${filePath}"`, { encoding: 'utf8' }).trim();
      if (status) {
        isModifiedLocally = true;
      }
    } catch (e) {
      // Git command failed or not a git repo
    }

    if (isModifiedLocally) {
      // Use local file system modified date
      const stats = fs.statSync(filePath);
      dates.push(stats.mtime.toISOString().split('T')[0]);
    } else {
      // Use last git commit date
      try {
        const gitDate = execSync(`git log -1 --format=%cs -- "${filePath}"`, { encoding: 'utf8' }).trim();
        if (gitDate && /^\d{4}-\d{2}-\d{2}$/.test(gitDate)) {
          dates.push(gitDate);
        } else {
          // Fallback to local file modified date if git log fails
          const stats = fs.statSync(filePath);
          dates.push(stats.mtime.toISOString().split('T')[0]);
        }
      } catch (e) {
        const stats = fs.statSync(filePath);
        dates.push(stats.mtime.toISOString().split('T')[0]);
      }
    }
  }

  if (dates.length === 0) {
    // Ultimate fallback is today's date in YYYY-MM-DD
    return new Date().toISOString().split('T')[0];
  }

  // Return the latest date among all associated files
  dates.sort();
  return dates[dates.length - 1];
}

function generateSitemap() {
  const baseUrl = 'https://bhagyaveda.in';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  for (const route of routesConfig) {
    const url = route.path ? `${baseUrl}/${route.path}` : `${baseUrl}/`;
    const lastmod = getLatestModifiedDate(route.files);

    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;

    if (route.images && route.images.length > 0) {
      for (const img of route.images) {
        xml += `    <image:image>\n`;
        xml += `      <image:loc>${baseUrl}/${img.loc}</image:loc>\n`;
        xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
        xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
        xml += `    </image:image>\n`;
      }
    }

    xml += `  </url>\n`;
  }

  xml += '</urlset>\n';

  const destPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(destPath, xml, 'utf8');
  console.log(`Successfully generated sitemap at: ${destPath}`);
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

generateSitemap();
