const getState = ({ getStore, setStore }) => {
	return {
		store: {
			infoPeliculas: [],
			infoPeople: [],
			infoVehicles: []
		},
		actions: {
			listaPeliculas: () => {
				const store = getStore();
				fetch("https://swapi.co/api/films/")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ infoPeliculas: data.results });
					});
			},
			listaPeople: () => {
				const store = getStore();
				fetch("https://swapi.co/api/people/")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ infoPeople: data.results });
					});
			},
			listaVehicles: () => {
				const store = getStore();
				fetch("https://swapi.co/api/vehicles/")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ infoVehicles: data.results });
					});
			}
		}
	};
};

export default getState;
