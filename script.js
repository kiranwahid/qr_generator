let input_text = document.getElementById('input_text');
let generate_btn = document.getElementById('generate_btn');
let qr_img = document.getElementById('qr_img');


generate_btn.addEventListener('click', function(){
    let qr_text = input_text.value;
    if (!qr_text) {
        alert(`please enter a valid url`);
        return;
       } else{
        qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_text}`;
        qr_img.alt = `OR code for ${qr_text}`;
        input_text.value = '';
        
    }
}
)