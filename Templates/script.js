document.addEventListener("DOMContentLoaded", async function () {
    const responseDiv = document.getElementById("system_response");
    responseDiv.innerHTML = "Loading data...";




    try {
        
        const res = await fetch("/api/random_flag");
        const data = await res.json();

        const html = `
            <h3><strong>${data.name}</strong></h3>
            <img src="${data.image_url}" class="img-fluid" alt="${data.name}" style="max-width: 400px; margin-bottom: 15px;" />
            <p>${data.description}</p>
            <hr>
            <div style="font-size: 14px; color: #999;">By : Saad Almalki / 0xSaad</div>
        `;

        responseDiv.innerHTML = html;
        responseDiv.classList.add("alert", "alert-light");

    } catch (error) {
        responseDiv.innerHTML = "ERROR!";
        console.error(error);
    }
});
