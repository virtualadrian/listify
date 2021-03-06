import { Action } from '@ngrx/store';
import { Tweet } from '../models/';
import { ActionTypes } from '../actions/feeds.actions';

export type State = {
  ids: string[];
  entities: { [id: string]: any };
  selectedUserListId: string;
  selectedFeedId: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedUserListId: null,
  selectedFeedId: null
}

export default function(state = initialState, action: Action): State {
  switch(action.type){
    case ActionTypes.GET_FEEDS_FOR_ID: {
      return Object.assign({}, state, {
        selectedUserListId: action.payload
      });      
    }

    case ActionTypes.GET_FEEDS_FOR_ID_SUCCESS: {
      const tweets: Tweet[] = action.payload

      // filter all new tweets and ids
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

      const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.GET_ALL_FEEDS_SUCCESS: {
      const tweets: any = action.payload
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.SELECT_FEED: {
      return Object.assign({}, state, {
        selectedFeedId: action.payload
      });
    }

    case ActionTypes.ADD_FEED_TO_FAV_SUCCESS: {
      const tweets: any = action.payload
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }
    
    case ActionTypes.REMOVE_FEED_FROM_FAV_SUCESS: {
      const tweets: any = action.payload
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.RETWEET_SUCCESS: {
       const tweets: any = action.payload
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    case ActionTypes.REPLY_SUCCESS : {
       const tweets: any = action.payload
      /**
       * TODO: Rethink over this approach
       */
      // const newTweets: any = tweets.filter(tweet => !state.entities[tweet.id]);

      const newTweets: any = tweets;

      const newTweetIds = tweets
                            .filter(tweet => !state.entities[tweet.id])
                            .map(tweet => tweet.id);

        const newEntities = newTweets
        .reduce((entities: { [id: string]: Tweet }, tweet: Tweet) => {
          return Object.assign(entities, { [tweet.id]: tweet }) 
        }, {});

        return Object.assign({}, state, {
          ids: [...state.ids, ...newTweetIds],
          entities: Object.assign({}, state.entities, newEntities)
        })
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedUserListId = (state: State) => state.selectedUserListId;
export const getSelectedFeedId = (state: State) => state.selectedFeedId;
