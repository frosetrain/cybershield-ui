export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const url = `${process.env.CYBERSHIELD_SERVER}/osint/submit`;
    return await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            target_name: body.targetName,
            additional_info: body.additionalInfo,
            find_images: body.findImages,
            email: body.email,
            instagram: body.instagram,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
});
