function simulate() {
    let output = document.getElementById("output");

    output.innerHTML = "Application requests to read a file...";

    setTimeout(() => {
        output.innerHTML = "Operating System receives the request using a system call (read()).";
    }, 2000);

    setTimeout(() => {
        output.innerHTML = "OS communicates with Disk hardware to retrieve data.";
    }, 4000);

    setTimeout(() => {
        output.innerHTML = "Data returned to OS, then sent back to the Application.";
    }, 6000);
}