
module.exports = (eleventyConfig) => {
    // recompile if sass files changed
    //following tutorial from Stephanie Eckles @ https://egghead.io/lessons/11ty-add-sass-compiling-and-watch-for-changes-in-eleventy-11ty
    eleventyConfig.addWatchTarget("./src/_includes/sass/");

    // Run manual file passthrough copy
    eleventyConfig.addPassthroughCopy("./src/_includes/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/_includes/js");
    eleventyConfig.addPassthroughCopy("./src/_redirects");


    // collection of people, sorted alphabetically (rather than by date of file creation)
    eleventyConfig.addCollection("peopleAlphabetized", function(collection) {
        return collection.getFilteredByGlob("src/people/*.md").sort(function(a, b) {
            let nameA = a.data.sort_name.toUpperCase();
            let nameB = b.data.sort_name.toUpperCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });

    // filter to be url friendly, but replace special characters
    // https://github.com/markedjs/marked/issues/1527
    eleventyConfig.addFilter("slugifySpecialCharacters", function(str) {
        str = str.replace(/^\s+|\s+$/g, '')
                 .replace(/,/g, '')
                 .replace(/'/g, '')
                 .replace(/"/g, '')
                 .replace(new RegExp(" ", 'g'), '-'); 
        str = str.toLowerCase();
        
        let entityFrom = ["&cacute;", "&aacute;"];
        let entityTo = ["c", "a"];
        for (var i = 0, l = entityFrom.length; i < l; i++) {
            str = str.replace(new RegExp(entityFrom[i], 'g'), entityTo[i]);
        }

        str.replace(/[^a-z0-9 -]/g, '') 
            .replace(/\s+/g, '-') 
            .replace(/-+/g, '-');
        return str;
    });

    eleventyConfig.addFilter("getContentFromHTML", str => {
        cleanText = str.replace(/<\/?[^>]+(>|$)/g, "");
        cleanText = cleanText.replace(/\n/g, " ");
        return cleanText;
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_includes/layouts/",
            includes: "_includes"
        },
        templateFormats: ["html", "md", "liquid", "njk"],
        passthroughFileCopy: true
    };
}