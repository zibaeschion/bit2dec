const finalMessage = (correctClicks, incorrectClicks) => {
    // Return a message based on the performance (correct vs incorrect clicks)
    if (correctClicks === 0 && incorrectClicks === 0) return "Everything okay?";
    if (incorrectClicks > correctClicks) return "Better luck next time!";
    if (correctClicks === incorrectClicks) return "Not bad!";
    if (correctClicks > 0 && incorrectClicks === 0) return "Awesome!";
    return "Well done!";
};

export default finalMessage;
