// import React, { useEffect, useReducer } from 'react';
// import {
//     getAll,
//     getAllByTag,
//     getAllTags,
//     search,
//   } from '../../services/foodService';
// import Thumbnails from '../../components/Thumbnails/Thumbnails';
// import { useParams } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import Tags from '../../components/Tags/Tags';
// import NotFound from '../../components/NotFound/NotFound';

// const initialState ={foods : [] , tags: []};
// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'FOODS_LOADED':
//         return { ...state, foods: action.payload };
//       case 'TAGS_LOADED':
//         return { ...state, tags: action.payload };
//       default:
//         return state;
//     }
//   };

// export default function HomePage() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const { foods, tags } = state;
//     const { searchTerm, tag }= useParams();
//     useEffect(() => {
//         getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        
//         const loadFoods = tag
//           ? getAllByTag(tag)
//           : searchTerm
//           ? search(searchTerm)
//           : getAll();

//         loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
//     },[searchTerm , tag]);
//     return (
//     <>
//         <Search />
//         <Tags tags={tags}/>
//         {foods.length === 0 && <NotFound linkText="Reset Search" />}
//         <Thumbnails foods={foods}/>
      
//     </>
//   )
// }

import React, { useEffect, useReducer } from 'react';
import {
    getAll,
    getAllByTag,
    getAllTags,
    search,
} from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import NotFound from '../../components/NotFound/NotFound';

const initialState = { foods: [], tags: [] };
const reducer = (state, action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return { ...state, foods: action.payload };
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload };
        default:
            return state;
    }
};

export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods, tags } = state;
    const { searchTerm, tag } = useParams();

    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

        const loadFoods = tag
            ? getAllByTag(tag)
            : searchTerm
                ? search(searchTerm)
                : getAll();

        loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
    }, [searchTerm, tag]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.2/libs/oversea/index.js';
        script.async = true;
        script.onload = () => {
            if (window.CozeWebSDK) {
                new window.CozeWebSDK.WebChatClient({
                    config: {
                        bot_id: '7371775103573180432',
                    },
                    componentProps: {
                        title: 'Coze',
                    },
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Search />
            <Tags tags={tags} />
            {foods.length === 0 && <NotFound linkText="Reset Search" />}
            <Thumbnails foods={foods} />
        </>
    );
}
