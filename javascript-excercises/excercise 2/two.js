/*
    <-- Complete the code to display the generated list of network address.
    Feel free to use the internet and any tool you wanted,but I highly suggest 
    to never search the exact problem or let an AI generate the code for you.
    Network Address: 127.0.0.1:5050 -->
    */

const ipAddresses = ['127.0.0.1','127.25.0.3','127.25.25.25','127.0.4.1'];
const ports = ['5050','4848','3456','8080']
    

function generateNetworkAddresses(ipAddresses, ports){
    var add = [];
       
            for (let a =0; a <4; a++) {
            add[a] = 'Network Address:' + ipAddresses[a] + ':' + ports[a]
            }  
    return add;
}
const networkAddresses = generateNetworkAddresses(ipAddresses, ports);
console.log('Number 2:', networkAddresses);
