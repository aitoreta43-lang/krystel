// Hidden Rotating Keyword/Title Technique - SEO Advanced
// Dynamically rotates keywords & title variations in hidden elements and metas
// Crawler sees fresh content, users see nothing (position: absolute offscreen)
// Runs client-side, no server impact

document.addEventListener('DOMContentLoaded', () => {
    const keywordSets = [
        { kw: 'free trial angel one research signals India Mumbai NSE', title: 'Angel One Free Research Trial India | Nifty Signals' },
        { kw: 'zerodha research subscription discount options trading Delhi', title: 'Zerodha Research Discount | Options NSE Beginners' },
        { kw: 'groww premium membership benefits Nifty chain Bangalore', title: 'Groww Premium Benefits | Accurate Research India' },
        { kw: 'dhan research free vs paid comparison professional', title: 'Dhan Free vs Paid Research Comparison Options' },
        { kw: 'best paid research service for options NSE today', title: 'Best Paid Options Research Service India NSE' },
        { kw: 'how to use angel one research effectively beginners', title: 'Angel One Research Guide | Effective Use India' },
        { kw: 'is zerodha research worth it for beginners Mumbai', title: 'Zerodha Research Worth It? Beginners Guide NSE' },
        { kw: 'what is groww research accuracy option chain Delhi', title: 'Groww Research Accuracy | Nifty Chain India' },
        { kw: 'how to read option chain like professional Bangalore', title: 'Read Option Chain Professional | Nifty Today' },
        { kw: 'best time to enter nifty options today India', title: 'Best Nifty Options Entry Time Today NSE Mumbai' }
    ];

    // Hidden containers
    const hiddenDivs = document.querySelectorAll('.seo-hidden');
    const titleMeta = document.querySelector('title');
    const descMeta = document.querySelector('meta[name="description"]');
    const keywordsMeta = document.querySelector('meta[name="keywords"]');

    let rotateIndex = 0;
    
    const rotateContent = () => {
        const set = keywordSets[rotateIndex % keywordSets.length];
        
        // Rotate hidden divs
        hiddenDivs.forEach((div, i) => {
            div.textContent = `${set.kw} India location ${['Mumbai', 'Delhi', 'Bangalore'][i % 3]}`;
        });
        
        // Rotate title subtly
        if (titleMeta) {
            titleMeta.textContent = set.title + ' | tradeXvision';
        }
        
        // Append to metas (crawler sees accumulation)
        if (descMeta) {
            descMeta.content += ` ${set.kw}`;
        }
        if (keywordsMeta) {
            keywordsMeta.content += `, ${set.kw}`;
        }
        
        rotateIndex++;
    };

    // Initial load
    rotateContent();
    
    // Rotate every 8 seconds (SEO friendly interval)
    setInterval(rotateContent, 8000);
    
    // Log for verification
    console.log('✅ Hidden keyword/title rotation active - 10 keyword sets rotating');
});


</content>
</xai:function_call x:function_call>
<xai:function_call name="edit_file">
<parameter name="path">d:/dev/dev/tradexvission/index.html
