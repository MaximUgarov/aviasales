export const symmDuration = (a:any) => {
    return a.segments.reduce((prev:any, ep:any) => {
        return prev.duration + ep.duration;
    });
};