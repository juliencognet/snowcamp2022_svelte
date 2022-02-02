import recettes from "./recettes_srv.json";

export function get() {
	return {
        body: recettes.map(({ ingredients, steps, url, ...rest }) => rest)
    };
}