const ipAddresses = ['127.0.0.1','127.25.0.3','127.25.25.25','127.0.4.1'];
const ports = ['5050','4848','3456','8080'];

console.log('Number 2:', generateNetworkAddresses(ipAddresses, ports));

function generateNetworkAddresses(ipAddresses, ports)
{
    var networkAddresses = [];
    for(let i = 0; i < ipAddresses.length; i++)
    {
        for(let j = 0; j < ports.length; j++)
        {
            networkAddresses.push(ipAddresses[i] + ':' + ports[j]);
        }
    }
    return networkAddresses;
}
