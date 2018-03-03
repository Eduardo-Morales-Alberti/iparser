/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
// Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.actions();
  },

  transformText: function () {
    var txt = "";
    $("#white-eyes").click(function () {
      txt = $("#origin").val();
      txt = txt.replace(/[aeiouáéíóú]/igm, "i");
      $("#destiny").val(txt);
    });
  },

  copy: function () {
    $("#copy").click(function () {
      $("#destiny").select();
      document.execCommand("Copy");
      navigator.notification.beep(2);
      navigator.notification.alert(
          'Has copiado el texto!',
          null,
          'Copiado',
          ['Ok']
          );
    });
  },

  getJson: function (file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          return allText;
        }
      }

      rawFile.send(null);
    };

  },

  actions: function () {
    $(document).ready(function () {
      this.transformText();
      this.copy();
      alert(getJson());
    });
  }
};
app.initialize();