document.addEventListener("DOMContentLoaded", ()=>{
    // GET THE SELECTORS OF THE BUTTONS
    // const startVideoButton = document.querySelector("button#start_video")
    // const stopVideoButton = document.querySelector("button#stop_video")
    const startVideoButton = document.querySelector("button#startRecording")
    const stopVideoButton = document.querySelector("button#stopRecording")

    // adding event listeners

    startVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    })


    stopVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 27')
                }
            })
        } )
    })
})



// -------------------------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//     let mediaRecorder;
//     let stream;

//     const startRecordingButton = document.getElementById('startRecording');
//     const stopRecordingButton = document.getElementById('stopRecording');

//     startRecordingButton.addEventListener('click', async function () {
//         stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//         mediaRecorder = new MediaRecorder(stream);

//         const chunks = [];
//         mediaRecorder.ondataavailable = event => {
//             chunks.push(event.data);
//         }

//         mediaRecorder.onstop = () => {
//             const blob = new Blob(chunks, { type: 'video/webm' });
//             const url = URL.createObjectURL(blob);
//             sendDataToServer(url); // Implement this function to send data to server
//         }

//         mediaRecorder.start();
//         startRecordingButton.disabled = true;
//         stopRecordingButton.disabled = false;
//     });

//     stopRecordingButton.addEventListener('click', function () {
//         mediaRecorder.stop();
//         stream.getVideoTracks()[0].stop();
//         startRecordingButton.disabled = false;
//         stopRecordingButton.disabled = true;
//     });
// });





// for appearance
// -------------------------------------------------------------------------------------

// function toggleButtons(activeButton) {
//     const button1 = document.getElementById('button1');
//     const button2 = document.getElementById('button2');

//     if (activeButton === 'button1') {
//         button1.disabled = true;
//         button2.disabled = false;

//     } else {
//         button1.disabled = false;
//         button2.disabled = true;
//     }
// }

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.onclick = () =>{
    button1.disabled = true;
    button2.disabled = false;
}
button2.onclick = () =>{
    button1.disabled = false;
        button2.disabled = true;
}


// -------------------------------------------------------------------------------------

// function toggleStartStopBtn(activeStartButton) {
//     const startRecButton = document.getElementById('startRecording');
//     const stopRecButton = document.getElementById('stopRecording');

//     const cameraToggleButton = document.getElementById('cameraToggleButton');
//     const audioToggleButton = document.getElementById('audioToggleButton');

//     if (activeStartButton === 'startRecBtn') {
//         startRecButton.disabled = true;
//         stopRecButton.disabled = false;
//         startRecButton.style.display = 'none';
//         stopRecButton.style.display = 'block';
//     } else {
//         startRecButton.disabled = false;
//         stopRecButton.disabled = true;
//         stopRecButton.style.display = "none";
//         startRecButton.style.display = 'block';
//         cameraToggleButton.checked = false;
//         audioToggleButton.checked = false;
//     }
// }
// -------------------------------------------------------------------------------------

// function toggleState() {
//     console.log('toggled')
//     const startStopButton = document.querySelector('.startStopButton');
//     const cameraToggleButton = document.getElementById('cameraToggleButton');
//     const audioToggleButton = document.getElementById('audioToggleButton');
//     // Check if the toggle button is checked
//     if (cameraToggleButton.checked || audioToggleButton.checked) {
//         // Do something when the toggle button is ON
//         console.log('Toggle button is ON');
//         startStopButton.style.backgroundColor = 'rgba(18, 11, 72, 1)';

//     } else {
//         // Do something when the toggle button is OFF
//         console.log('Toggle button is OFF');
//         startStopButton.style.backgroundColor = '#605C84';
//     }
// }

// ________________________________ camera/audio toggle ckeckbox btn _____________________________________

const startStopButton = document.querySelector('.startStopButton');
const cameraToggleButton = document.getElementById('cameraToggleButton');
const audioToggleButton = document.getElementById('audioToggleButton');


cameraToggleButton.onclick = () =>{
    if (cameraToggleButton.checked || audioToggleButton.checked) {
        // Do something when the toggle button is ON
        console.log('Toggle button is ON');
        startStopButton.style.backgroundColor = 'rgba(18, 11, 72, 1)';
    
    } else {
        // Do something when the toggle button is OFF
        console.log('Toggle button is OFF');
        startStopButton.style.backgroundColor = '#605C84';
    }
}
audioToggleButton.onclick = () =>{
    if (cameraToggleButton.checked || audioToggleButton.checked) {
        // Do something when the toggle button is ON
        console.log('Toggle button is ON');
        startStopButton.style.backgroundColor = 'rgba(18, 11, 72, 1)';
    
    } else {
        // Do something when the toggle button is OFF
        console.log('Toggle button is OFF');
        startStopButton.style.backgroundColor = '#605C84';
    }
}




// __________________________ start/stop rec button _______________________________

const startRecButton = document.getElementById('startRecording');
const stopRecButton = document.getElementById('stopRecording');
// const cameraToggleButton = document.getElementById('cameraToggleButton');
//     const audioToggleButton = document.getElementById('audioToggleButton');

startRecButton.onclick = () => {
    startRecButton.disabled = true;
    stopRecButton.disabled = false;
    startRecButton.style.display = 'none';
    stopRecButton.style.display = 'block';
}
stopRecButton.onclick = () => {
    startRecButton.disabled = false;
    stopRecButton.disabled = true;
    stopRecButton.style.display = "none";
    startRecButton.style.display = 'block';
    cameraToggleButton.checked = false;
    audioToggleButton.checked = false;
}


// -------------------------------------------------------------------------------------




document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');

    closeButton.addEventListener('click', function () {
        // Close the floating window
        window.close();
    });
});


