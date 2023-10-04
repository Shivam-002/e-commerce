async function get_phones() {
const url = 'https://cellphones.p.rapidapi.com/phones/getphones?brandid=237';

const headers = {
	'X-RapidAPI-Key': '23ec9cb6bcmsh1b898a79c90ec6dp1b7e25jsnbfbe238ef810',
	'X-RapidAPI-Host': 'cellphones.p.rapidapi.com',
};

try {
	const response = await fetch(url, {
	method: 'GET',
	headers: headers,
	});

	if (!response.ok) {
	throw new Error('Network response was not ok');
	}

	const data = await response.json();
	console.log(data);
} catch (error) {
	console.error('Error fetching data:', error);
}
}

get_phones();  