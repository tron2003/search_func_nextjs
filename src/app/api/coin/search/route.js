import { NextResponse } from "next/server";

async function fetchCoins() {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
        'method': 'GET', 'headers': {

            'X-RapidAPI-Key': 'e5971f9d6amshf002c489964ca29p13f60bjsn3f5415624957',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    })
    const data = await response.json();
    return data

}

export async function GET(request) {
    const coins = await fetchCoins();
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get('query'))
    const query = searchParams.get('query');

    const filteredCoins = coins.data.coins.filter((coin) => {
        return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredCoins);
}
