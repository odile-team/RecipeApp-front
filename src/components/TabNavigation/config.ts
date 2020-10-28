export type Index = 'Recipe' | 'Search' | 'Grocery' | "Profile"
type FromIndex = { [k in Index]: string }

export const icons: FromIndex = {
    Recipe : "silverware-fork-knife",
    Search : "magnify",
    Grocery: "format-list-bulleted",
    Profile: "account"
}