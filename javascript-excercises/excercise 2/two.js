const ipAddresses = ['127.0.0.1', '127.25.0.3', '127.25.25.25', '127.0.4.1'];
const ports = ['5050', '4848', '3456', '8080'];

console.log('Number 4:', generateNetworkAddresses(ipAddresses, ports, 4));

function generateNetworkAddresses(ipAddresses, ports, limit) 
{
    var z =[];
        for(let k = 0; k < 4; k++){
            z[k] = "Network Address: " + ipAddresses[k] + ":" + ports[k];
        }
        return z;
}




