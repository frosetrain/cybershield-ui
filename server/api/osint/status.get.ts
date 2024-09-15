export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = `${process.env.CYBERSHIELD_SERVER}/osint/status/${query.taskId}`;
    return await fetch(url, { method: "GET" });
});
