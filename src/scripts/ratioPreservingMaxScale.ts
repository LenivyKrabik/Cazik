
/**
 * Resizing div with said aspect raio while not overflowing it's parrent div
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
                //targetElement.style = "aspect-ratio: 2/1;width:100%;height:auto;max-height:100%;"
                console.log(Number(parentStyle.width.match(/\d+/)?.[0]));
                const newHeight = width * Number(Ratio[1])
                console.log(newHeight);
                Object.assign(targetElement.style, {
                    width : parentStyle.width,
                    height : String(newHeight) + "px",
                })

            }
            else{ //Fat
                //targetElement.style = "aspect-ratio: 2/1;width:auto;height:100%;max-width:100%;"
                const newWidth = height * Number(Ratio[0])
                console.log(newWidth);
                Object.assign(targetElement.style, {
                    width : String(newWidth) + "px",
                    height : parentStyle.height,
                })
            }    
        }
        


    }
}

export default RatioPreservingMaxScale;