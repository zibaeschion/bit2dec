const formatTime = (time) => {
    // Convert time (in seconds) to MM:SS format
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default formatTime;
