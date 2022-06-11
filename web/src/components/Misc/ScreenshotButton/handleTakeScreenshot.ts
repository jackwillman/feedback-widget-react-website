import html2canvas from "html2canvas";

const handleTakeScreenshot = async function HandlesTakingScreenshotOfTheCurrentScreen(
    handleSetScreenshot : (screenshot : string | null) => void,
    setIsTakingScreenshot : (isTakingScreenshot : boolean) => void
) {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    handleSetScreenshot(base64image);
    setIsTakingScreenshot(false);
};

export default handleTakeScreenshot;