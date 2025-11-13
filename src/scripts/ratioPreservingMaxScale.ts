/**
 * Resizing div with said aspect raio while not overflowing it's parent div
 * @param targetElement {HTMLDivElement} Div that needs resizing
 * @param parent {HTMLDivElement} Div's parent
 * @param aspectRatio {string}
 */
const RatioPreservingMaxScale = (targetElement: HTMLDivElement | null, aspectRatio: string) => {
    if (targetElement) {
        const parent = targetElement.parentElement;
        if (parent){
            const parentStyle = window.getComputedStyle(parent);

            const Ratio = aspectRatio.split("/");
            Ratio.map((num) => Number(num));

            const width = Number(parentStyle.width.match(/\d+/)?.[0]) / Number(Ratio[0]);
            const height = Number(parentStyle.height.match(/\d+/)?.[0]) / Number(Ratio[1]);

            if(height > width){ //Long
                const newHeight = width * Number(Ratio[1])
                Object.assign(targetElement.style, {
                    width : parentStyle.width,
                    height : String(newHeight) + "px",
                    fontSize: String(newHeight/10) + "px",
                })

            }
            else{ //Fat
                const newWidth = height * Number(Ratio[0])
                Object.assign(targetElement.style, {
                    width : String(newWidth) + "px",
                    height : parentStyle.height,
                    fontSize: Number(parentStyle.height.match(/\d+/)?.[0]) / 10 + "px",
                })
            }    
        }
        


    }
}


export default RatioPreservingMaxScale;
