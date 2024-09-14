export default defineFormActions({
    default: async (event) => {
        const formData = await readFormData(event);
        const targetName = formData.get("targetName");
        const additionalInfo = formData.get("additionalInfo");
        const findImages = formData.get("findImages") !== null;
        const email = formData.get("email");
        const instagram = formData.get("instagram");
        console.log(targetName, additionalInfo, findImages, email, instagram);
        let url = `${process.env.CYBERSHIELD_SERVER}/osint/submit`;
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                target_name: targetName,
                additional_info: additionalInfo,
                find_images: findImages,
                email: email,
                instagram: instagram,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then(async (response) => {
                console.log(response, typeof response);
                return actionResponse(event, { result: "amogus" });
            });
        });
    },
});
