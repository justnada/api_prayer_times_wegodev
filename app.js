function index() {
    let app = document.getElementById('app'); 
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.append(h3);

    userLocation();
}

index();

function success(position){
    console.log(position);
}

function error(){
    alert('posisi tidak dapat diakses');
}

function userLocation() {
    if(!navigator.geolocation){
        alert('Geolocation tidak didukung di browser anda');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}