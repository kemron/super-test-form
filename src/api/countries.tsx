import { useEffect, useState } from "react";

export type Country = {
  code: string;
  name: string;
  callingCode: string;
}
//caches of loaded countries across applicatio to avoid multiple requests
let countries: Country[] = []

function transformCountries(countries: any[]): Country[] {
  return countries.map(ctry => ({
    code: ctry.cca3,
    name: ctry.name.common,
    callingCode: `${ctry.idd.root}${ctry.idd.suffixes[0]}`
  }))
}


export function useCountries() {
  const [loaded, setLoaded] = useState<boolean>(countries.length > 0);

  useEffect(() => {
    if (!loaded) {
      fetch("https://restcountries.com/v3.1/all?fields=name,cca3,idd")
        .then(response => response.json())
        .then(transformCountries)
        .then(data => {
          countries = data
          setLoaded(true)
        })
    }
  }, [loaded])

  return countries;
}