import React, {Component} from 'react';
import  Title from '../../components/title/title';
import NewsPost from '../../components/news/news'

const BASE_PATH= 'https://hn.algolia.com/api/v1';
const SEARCH_PATH='/search';
const SEARCH_PARAM = 'query=';

class  News extends  Component{
    state={
        searchQuery:'',
        result:{}
    }
    componentDidMount() {
        const {searchQuery}=this.state;
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
            .then(res=>res.json())
            .then(result => this.setNews(result))
            .catch(error => error);
    }

    setNews = result =>{
        this.setState({result});
    }

    render(){
        const {searchQuery,result}=this.state;
        const {hits=[]}= result;

        console.log(result);

        return (
            <div className="wrapper">
                <Title title="Haker News" />
                <ul className="newsList">
                    {hits.map(({author, created_at,num_comments,objectsID,title,points,url})=>
                    <NewsPost
                        created_at={created_at}
                        key={objectsID}
                        author={author}
                        num_comments={num_comments}
                        title={title}
                        points={points}
                        url={url}
                    />
                    )}
                </ul>
            </div>
        );
    }
}
export default  News;