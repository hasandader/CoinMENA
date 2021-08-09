import create from 'zustand';
import axios from 'axios';
import { sort } from '../lib/helpers';

export const useStatisticsStore = create(set => ({
    totals: {},
    totalsSum: 0,
    summary: {},
    topFive: [],
    countries: [],

    fetchTotal: async () => {
        await axios.get('https://api.covid19api.com/world/total')
            .then(function (response) {
                const sum = response.data.TotalConfirmed + response.data.TotalDeaths + response.data.TotalRecovered;
                set({ totals: response.data, totalsSum: sum })
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    fetchSummary: async () => {
        await axios.get('https://api.covid19api.com/summary')
            .then(function (response) {

                var sorted = sort(response.data.Countries, 'TotalConfirmed')

                var top5 = sorted.slice(0, 5);

                set({ summary: response, topFive: top5 })
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    fetchCountries: async () => {
        await axios.get('https://api.covid19api.com/countries')
            .then(function (response) {
                set({ countries: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}));