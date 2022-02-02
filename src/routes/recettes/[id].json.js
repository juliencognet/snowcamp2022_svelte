import recettes from "./recettes_srv.json";

export function get({ params }) {
	return {
        body: recettes[params.id]
    };
}