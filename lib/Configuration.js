/**
 * Powered by Systango
 * http://www.systango.com
 */

'use strict';

import React from 'react-native';

/*
  * The instance of our singleton
  * Setting up block level variable to store class state
  * , set's to null by default.
*/
let hostURL = null;
let isReportCrash = null;
let isSendOnRemote = null;
let userID = null;
let apiKey = null;

module.exports = {

    setAPIKey(key){
      apiKey = key;
    },

    getAPIKey(){
      return apiKey;
    },

     setHostURL(url){
        hostURL = url;
      },

     getHostURL(){
      return hostURL;
      },

     setIsReportCrash(_isReportCrash){
       isReportCrash = _isReportCrash;
     },

    getIsReportCrash(){
     return isReportCrash;
    }

};
