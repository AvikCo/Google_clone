import React from 'react';
import axios from 'axios';

interface searchData {
  cacheId: string | undefined;
  htmlFormattedUrl: string;
  link: string;
  snippet: string;
  title: string;
}
interface dataState {
  data: searchData[];
  term: string;
}

 const Context = React.createContext<any>([]);

export class SearchDataStore extends React.Component {
  state: dataState = { data: [], term:'' };

  // onSearch = (data: searchData[]) => {
  //   this.setState({ data:data });
  // }

 MakeSearch = async (term: string) => {
    try{
    const response = await axios.get('https://customsearch.googleapis.com/customsearch/v1',
      {
        params: {
          key: 'AIzaSyB3TOV7ERv4GlVnVyaEzTPMamo7AGUlsSk',
          cx: '73922846ef82221b0',
          q: term
        },
      }
      );
      
      const data = response.data.items.map((item: any) =>
      ({
        cacheId: item.cacheId,
        htmlFormattedUrl: item.htmlFormattedUrl,
        link: item.link,
        snippet: item.snippet,
        title: item.title
      }));
      this.setState({ data: data });
      this.setState({ term: term });
      
    } catch (err) {

      console.log(err);
      alert(err.messege);
  }
  }


  render() {
    return (
      <Context.Provider value={{data: [ ...this.state.data], term: this.state.term, onSearch: this.MakeSearch}}>
          {this.props.children}
      </Context.Provider>
 
    )
}

}

export default Context;


