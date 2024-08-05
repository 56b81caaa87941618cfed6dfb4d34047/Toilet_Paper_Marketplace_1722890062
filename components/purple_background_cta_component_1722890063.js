/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722890063", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-br from-blue-900 to-purple-900">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-opacity-80 bg-purple-800 shadow-lg">
                <!-- Radial gradient -->
                <!-- Toilet Paper Background -->
                <div id="toilet-paper-background" class="absolute inset-0 pointer-events-none -z-10 opacity-10" aria-hidden="true">
                    <div class="w-full h-full bg-repeat" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBjMC0yLjc2LTIuMjQtNS01LTVzLTUgMi4yNC01IDUgMi4yNCA1IDUgNSA1LTIuMjQgNS01eiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==');"></div>
                </div>
                <!-- Toilet Paper Roll -->
                <div id="toilet-paper-roll" class="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full shadow-lg opacity-20" aria-hidden="true">
                    <div class="absolute inset-4 bg-gray-100 rounded-full"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-gray-300 pb-3" :class="[contentSubtitleStyle]">Your One-Stop Shop for TP Trades</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-white pb-4" :class="[contentCtaTitleStyle]"> Roll into Profits: The TP Exchange</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-gray-200" :class="[contentBodyStyle]">Join the world's first toilet paper trading marketplace. Buy low, sell high, and wipe away your financial worries!</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-gray-200",
                radialGradientSecondaryStyle: "bg-white",
                stopColorPrimaryStyle: "#E5E7EB",
                stopColorSecondaryStyle: "#FFFFFF",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-gray-600 to-gray-400",
                contentCtaTitleStyle: "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
                contentBodyStyle: "text-gray-600",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600",
                contentCtaButtonHoverStyle: "hover:bg-gray-500",
                contentCtaArrowStyle: "text-white"
            };
        },
    });
                    