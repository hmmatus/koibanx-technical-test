# KOIBANX Technical assignment

## Run the project

first `npm i`

then `npm start`

# Package structure

src

- components (I store the components like table,tableRow and searchbar)
- constants (This is where i held the MOCK api response)
- context (For the pagination i create a context provider where i store the data about the search when i change the page)
- screens (Here i store the screens)
- api (Here i stored mi queries)

## About the queries

Because of the problem that there isn't testable endpoint the queries are commented. Also in TableScreen the setData is commented because the api doesn't return data
