/*
    <-- Complete the code to display the generated list of network address.
    Feel free to use the internet and any tool you wanted,but I highly suggest 
    to never search the exact problem or let an AI generate the code for you.
    Network Address: 127.0.0.1:5050 -->
    */
    const ipAddresses = ['127.0.0.1', '127.25.0.3', '127.25.25.25', '127.0.4.1'];
    const ports = ['5050', '4848', '3456', '8080'];
    
    function generateNetworkAddresses(ipAddresses, ports) {
        var x =[];
        for(let y = 0; y < 4; y++){
            x[y] = "Network Address: " + ipAddresses[y] + ":" + ports[y];
        }
        return x;
    }
    
    const networkAddresses = generateNetworkAddresses(ipAddresses, ports);
    
    // Filter and display only the IP addresses
    console.log('IP Addresses:', networkAddresses);
