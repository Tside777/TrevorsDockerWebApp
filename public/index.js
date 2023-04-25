async function ajaxFun() {
    try { 
        var response = await fetch("http://localhost:3000/data", {
            //mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        var data = response.json();
        return data;
    }
    catch(e) {
        console.log(e)
    }
}


$(document).ready(function() {
    const datadiv = $('.dbdata')
    $('#dataButton').click(function() {
        ajaxFun().then(data => {
            datadiv.text(data.data)
            console.log(data.data);
        });
    })
})