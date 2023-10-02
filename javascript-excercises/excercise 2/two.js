const ipAddresses = ['127.0.0.1', '127.25.0.3', '127.25.25.25', '127.0.4.1'];
const ports = ['5050', '4848', '3456', '8080'];

console.log('Number 4:', generateNetworkAddresses(ipAddresses, ports, 4));

function generateNetworkAddresses(ipAddresses, ports, limit) 
{
    var x =[];
        for(let y = 0; y < 4; y++){
            x[y] = "Network Address: " + ipAddresses[y] + ":" + ports[y];
        }
        return x;
}




