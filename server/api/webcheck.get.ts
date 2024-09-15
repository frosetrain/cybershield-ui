export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = `${process.env.CYBERSHIELD_SERVER}/webcheck?${new URLSearchParams({
        url: encodeURIComponent(query.url),
    })}`;
    return await fetch(url, { method: "GET" });
});
