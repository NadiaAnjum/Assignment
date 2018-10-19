'use strict'; 

UserTemplates.$inject = ['$templateCache'];  

function UserTemplates ($templateCache) {
    $templateCache.put('login.html', '<div ng-controller="LogInCtlr">' +
  '<div flex="none" layout="row">' +
    '<div flex="20" layout="column"></div>' +
    '<div flex="60" layout="column">' +
      '<div layout="row" flex="none" layout-align="end center">' +
        '<a ng-model="btn_create_subs" class="lbl-content-body-mb10" ng-click="loadSignUp();" style="color: CornflowerBlue; cursor: pointer;">' +
         'Signup' +
        '</a> ' +
      '</div> ' +
      '<div layout="row" flex="none" layout-align="start center">' +
        '<label class="lbl-content-header">' +
          'Login' +
        '</label>' +
      '</div> ' +
      '<div flex="none" layout="row" style="margin-top: 50px;">' +
        '<div flex="20">' +
          '<label class="lbl-content-body-mb10">' +
          'Email Id ' +
        '</div>' +
        '<div flex="80">' +
          '<input type="text" class="ipt-content-body-mb10" ng-model="txt_log_email" required ng-value="txt_log_email">' +
       '</div>' +
      '</div>' +
      '<div layout="row" flex="none" layout-align="end center" >' +
        '<button ng-model="btn_login" class="btn-action-mb10" ng-click="login($event);">' +
         'Login' +
        '</button>' +
      '</div>' +       
    '</div>' +
    '<div flex="20" layout="column"></div>' +
  '</div>' +
'</div>');

    $templateCache.put('../main_page.html', '<!-- header -->' +
'<div flex="none" layout="column" ng-controller="MainPageCtlr">' + 
  '<div flex="none" layout="column">' +
    '<div flex="none" class="div-header-toolbar" layout="row" layout-align="space-between center" style="line-height: 1.5;">' +
      '<div flex="25" layout="row" layout-align="start center">' +
        '<img ng-src="images/product.jpg" alt="logo" class="img-logo">' +
      '</div>' +
      '<div flex="50" layout="row" layout-align="center center">' +
        '<label style="text-align: center; color: #FFF; font-size: 14px; overflow: hidden;">' +
          '{{companyName}}' +
          
        '</label> ' +
        '<md-button class="md-icon-button" aria-label="Close" ng-click="getMenu($event)" style="margin-top: 0px; margin-left: 5px; margin-bottom: 0px; padding: 0px; width: 20px; min-height: 12px; height: 12px;" ng-show="showAdminMenu">' +
          '<img src="images/icons/arrow_down_white_18.png">' +
        '</md-button> ' +
      '</div> ' +       
      '<div flex="25" layout="row" layout-align="end center" ng-show="showUserMenu">' +
        
        '<div flex="20" layout="row" layout-align="start center">' +
          '<md-button class="md-icon-button" aria-label="Close" ng-click="getHelpMenu($event)" style="margin-top: 0px; margin-left: 5px; margin-bottom: 0px; padding: 0px; width: 20px; min-height: 20px; height: 12px;">' +
            '<md-tooltip md-direction="left" style="font-size: 14px;">' +
              'Help' +
            '</md-tooltip>' +
            '<img src="images/icons/help_outline_white.png">' +
          '</md-button> ' + 
        '</div>' +
        '<div flex="80" layout="row" layout-align="end center">' +
          '<div flex="70" style="overflow: hidden; white-space: nowrap;">' +
            '<label style="text-align: center; color: #FFF; font-size: 14px; overflow: hidden; white-space: nowrap;">' +
              '{{txt_email_id}}' +
              
            '</label>' +
          '</div>' +
          '<div flex="10">' +
            '<md-button class="md-icon-button" aria-label="Close" ng-click="getUserMenu($event)" style="margin-top: 0px; margin-left: 5px; margin-bottom: 0px; padding: 0px; width: 20px; min-height: 12px; height: 12px;">' +
              '<img src="images/icons/arrow_down_white_18.png">' +
            '</md-button>' +
          '</div>' +
        '</div>' +
      '</div>' +     
    '</div>' + 
  '</div>' +

'<!-- content -->' +  

  '<!--<md-content style="min-height: auto; max-height: 100%; height: 85vh;">-->' +
  '<div flex="none" layout="column" ng-include="loadPage" style="height: 85vh;">' +
  '</div>' +
  '<!--</md-content>-->' +
'<!-- footer -->' +

  '<div flex="none" layout="column">' +
    '<div flex="none" class="div-footer-toolbar" layout="row" layout-align="space-between center">' +
      '<div flex="none" layout="row" layout-align="start center">' +
        '<label class="lbl-footer">Copyright &copy;  Jneya Technologies 2016</label>' +
      '</div>' +

      '<div flex="none" layout="row" layout-align="start center" ng-show="showUserMenu">' +
        '<label style="text-align: left; color: #FFF; font-size: 16px; margin-left: 5px;">' +
          'You are in ' +
          '<strong>{{dataProType}}</strong>' + 
          'Mode' +
           
        '</label>' +
        '<md-button class="md-icon-button" aria-label="Close" ng-click="loadDataProcess()" style="margin-top: 0px; margin-left: 5px; margin-bottom: 0px; padding: 0px; width: 20px; min-height: 20px; height: 12px;">' +
          '<md-tooltip md-direction="left" style="font-size: 14px;">' +
            'Click to change Data processing mode' +
          '</md-tooltip>' +
          '<img src="images/icons/edit_white_18.png">' +
        '</md-button> ' + 
      '</div>' +
      '<div flex="none" layout="row" layout-align="end center">' +
        '<a class="a-footer" href="http://www.jneyatechnologies.com"><strong>JNEYA Technologies</strong></a>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>');

    $templateCache.put('transactions/m12_trn_main_page.html', '<div ng-controller="TrnMainPageCtlr">' +
' <div flex="none" layout="column"> ' +
'   <div layout="row" layout-padding>' +
'     <div flex="none" layout="column"></div>' +
'     <div flex="100" layout="column">' +
'       <div layout="row" layout-align="space-between center">' +
'         <div layout="row" layout-align="start center">' +
'           <label class="lbl-db-header">Today: &nbsp;</label>' +
'           <label class="lbl-db-header-value">{{today}}</label>' +
'         </div>' +
'         <div layout="row" layout-align="end center">' +
'           <label class="lbl-db-header">' +
'             <md-tooltip md-direction="left" style="font-size: 14px;">' +
'               Current Financial Year' +
'             </md-tooltip>' +
'             CFY: &nbsp; ' +
'           </label>' +
'           <label class="lbl-db-header-value"> ' +
'             {{financialYear[\'financial_year\']}}' +
'           </label>            ' +
'         </div> ' +
'       </div>   ' +
'       <md-divider></md-divider>' +
'       <div flex="none" layout="row" style="height: 150px;" layout-align="center center">' +
'         <div flex="50" layout="row" style="margin-top: 15px; margin-bottom: 15px;" layout-align="space-between center">' +
'           <div ng-if="customPoMenu.length >0">' +
'             <div layout="column">         ' +
'               <div layout="row">' +
'                 <label class="lbl-db-header">Orders &emsp;</label>' +
'               </div>' +
'               <label  class="lbl-db-header-value">{{orderCount}} &emsp; </label>' +
'             </div>' +
'           </div>' +
'           <div layout="column" ng-show="showDcMenu">' +
'             <div layout="row">' +
'               <label class="lbl-db-header">&nbsp; Delivery  &emsp;</label>' +
'             </div>' +
'             <label class="lbl-db-header-value">&nbsp; {{deliveryCount}} &emsp;</label>' +
'           </div>' +
'           <div layout="column" ng-show="showInvoiceMenu">' +
'             <div layout="row">' +
'               <label class="lbl-db-header">&nbsp; Invoice</label>' +
'             </div>' +
'             <label class="lbl-db-header-value">&nbsp; {{invoiceCount}}</label>' +
'           </div>' +
'         </div>' +
'         <div flex="50" layout="row" style="margin-top: 30px; margin-bottom: 0px;">' +
'           <linechart data="data" options="options"></linechart>' +
'         </div>' +
'       </div>' +
'     </div> ' +
'     <div flex="none" layout="column"></div>' +
'   </div>' +
'   <div flex="none" layout="column" style="height: auto;">' +
'     <div flex="none" layout="row" layout-align="space-around center">' +
'       <div flex="50" layout="column" class="div-db-content-box" style="height: 320px;">' +
'         <div ng-show="showInvDcInfo">' +
'           <div flex="none" layout="row" style="margin: 3px 0px 3px 0px;">' +
'             <md-radio-group ng-model="rbtn_sel_action" layout="row" layout-align="start center" layout-margin ng-click="loadPendingDC();">' +
'               <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="Invoice" ng-show="showInvoiceMenu"> Invoice ' +
'               </md-radio-button>' +
'               <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="DC" ng-show="showDcMenu">Delivery' +
'               </md-radio-button> ' +
'             </md-radio-group>' +
'           </div>' +
'           <md-divider></md-divider>' +
'           <div flex="none" layout="row" style="margin: 0px 0px;" ng-show="showDCType">' +
'             <md-radio-group ng-model="rbtn_sel_dc_action" layout="row" layout-align="start center" layout-margin ng-click="loadSampleDC();">' +
'               <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="Regular"> Regular ' +
'               </md-radio-button>' +
'               <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="Sample">Sample' +
'               </md-radio-button>' +
'             </md-radio-group>' +
'           </div>  ' +
'           <md-divider></md-divider>' +
'           <div flex="none" layout="row" layout-align="start center">' +
'             <md-button aria-label="Search" class="md-icon-button">' +
'               <img src="images/icons/search.png"/>' +
'             </md-button>' +
'             <input class="ipt-search" type="text" ng-model="txt_act_search" placeholder="Search">' +
'           </div>' +
'           <md-divider></md-divider>' +
'           <div flex="none" layout="column" class="div-db-content-table" style="height: 30vh;">' +
'             <div ng-if="rbtn_sel_action == \'Invoice\'">' +
'               <div flex="none" layout="column" ng-repeat="inv in pendInvoiceList | filter: txt_act_search | orderBy: \'invoice_id\' :true">' +
'                 <md-whiteframe class="md-whiteframe-2dp" flex="none" layout="column" ng-style="{\'background-color\':whf_inv_list[$index]}">' +
'                   <div flex="none" layout="row" layout-align="space-between center">' +
'                     <div flex="30">' +
'                       <label class="lbl-table-content" style="padding-left: 10px;">{{inv.invoice_no}} ' +
'                       </label>' +
'                     </div>' +
'                     <div flex="20">' +
'                       <label class="lbl-table-content">{{getDateFormat(inv.invoice_date)}}' +
'                       </label>' +
'                     </div>' +
'                     <div flex="35">' +
'                       <label class="lbl-table-content">' +
'                       {{inv.cust_vend_code}}' +
'                       </label>' +
'                     </div>' +
'                     <div flex="15">' +
'                       <md-menu>' +
'                         <md-button aria-label="Open menu with custom trigger" class="md-icon-button" ng-click="openInvoiceMenu($mdMenu, $event, $index)">' +
'                           <img src="images/icons/list_black.png"/>' +
'                         </md-button>' +
'                         <md-menu-content width="2" ng-mouseleave="closeInvoiceMenu($mdMenu, $event, $index)"  style="max-height: 90vh;">' +
'' +
'                           <div ng-repeat="menu in customInvMenu">' +
'                             <div ng-if="menu != \'Create\'">' +
'                               ' +
'                               <div  ng-click="loadInvMenu($event, menu, inv.cust_vend_code, inv.invoice_id);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu}}' +
'                               </div>' +
'                             </div>' +
'                           </div>    ' +
'                         </md-menu-content>' +
'                       </md-menu>' +
'                     </div>' +
'                   </div>          ' +
'                 </md-whiteframe>' +
'               </div>' +
'               <div flex="none" layout="column" layout-align="center center" ng-show="showNoInvMsg">' +
'                 <label class="lbl-content-header" style="margin-top: 100px;">' +
'                   No Invoices are added' +
'                 </label>' +
'                 ' +
'               </div>' +
'             </div>' +
'             <div ng-if="rbtn_sel_action == \'DC\'">' +
'               <div flex="none" layout="column" ng-repeat="dc in pendingDCList | filter: txt_act_search | orderBy: \'dc_id\' :true">' +
'                 <md-whiteframe class="md-whiteframe-2dp" flex="none" layout="column" ng-style="{\'background-color\':whf_dc_list[$index]}">' +
'                   <div flex="none" layout="row" layout-align="space-between center">' +
'                     <div flex="30">' +
'                       <label class="lbl-table-content" style="padding-left: 10px;">{{dc.dc_no}} ' +
'                       </label>' +
'                     </div>' +
'                     <div flex="20">' +
'                       <label class="lbl-table-content">{{getDateFormat(dc.dc_date)}}' +
'                       </label>' +
'                     </div>' +
'                     <!--<div flex="15">' +
'                       <label class="lbl-table-content">{{dc.dc_type}}' +
'                       </label>' +
'                     </div>-->' +
'                     <div flex="35">' +
'                       <label class="lbl-table-content">' +
'                       {{dc.cust_vend_code}}' +
'                       </label>' +
'                     </div>' +
'                     <div flex="15">' +
'                       <md-menu>' +
'                         <md-button aria-label="Open menu with custom trigger" class="md-icon-button" ng-click="openDcMenu($mdMenu, $event, $index)">' +
'                           <img src="images/icons/list_black.png"/>' +
'                         </md-button>' +
'                         <md-menu-content width="2" ng-mouseleave="closeDcMenu($mdMenu, $event, $index)"  style="max-height: 90vh;">' +
'                           <div ng-repeat="menu in customDcMenu">' +
'                             <div ng-if="menu != \'Create\'">' +
'                               ' +
'                               <div  ng-click="loadDcMenu($event, menu, dc.cust_vend_code, dc.dc_id);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu}}' +
'                               </div>' +
'                             </div>' +
'                           </div>' +
'                         </md-menu-content>' +
'                       </md-menu>' +
'                     </div>' +
'                   </div>          ' +
'                 </md-whiteframe>' +
'               </div>' +
'               <div flex="none" layout="column" layout-align="center center" ng-show="showNoDCMsg">' +
'                 <label class="lbl-content-header" style="margin-top: 80px;">' +
'                   No Delivery Challans are added' +
'                 </label>' +
'                 ' +
'               </div>' +
'             </div>' +
'           </div>' +
'         </div>' +
'       </div>' +
'' +
'       <div flex="50" layout="column" class="div-db-content-box" ng-show="showCutVndInfo"  style="height: 320px;">' +
'         <div flex="none" layout="row" layout-align="space-between center"  style="margin: 0px 0px 0px 8px; height: 40px;">' +
'           <md-radio-group ng-model="rbtn_sel_default" layout="row" layout-align="start center" ng-click="loadVendList();">' +
'             <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="Customers" ng-show="showCustomerMenu"> Customers ' +
'             </md-radio-button>' +
'             <md-radio-button ng-style="{ \'font-size\': \'14px\' }" value="Vendors" ng-show="showVendorMenu">Vendors' +
'             </md-radio-button>' +
'           </md-radio-group>' +
'           <div flex="none" layout="row" layout-align="end center" ng-show="showNewCustVend">' +
'             <div ng-if="rbtn_sel_default == \'Customers\'">' +
'               <md-button class="md-icon-button" aria-label="Close" ng-click="loadCustCreate()">' +
'                 <md-tooltip md-direction="left" style="font-size: 14px;">Add New Customer</md-tooltip>' +
'                 <img src="images/icons/add_circle.png"/>' +
'               </md-button>' +
'             </div>' +
'             <div ng-if="rbtn_sel_default == \'Vendors\'">' +
'               <md-button class="md-icon-button" aria-label="Close" ng-click="loadVendCreate()">' +
'                 <md-tooltip md-direction="left" style="font-size: 14px;">Add New Vendor</md-tooltip>' +
'                 <img src="images/icons/add_circle.png"/>' +
'               </md-button>' +
'             </div>' +
'           </div>  ' +
'         </div>' +
'         <md-divider></md-divider> ' +
'' +
'         <div flex="none" layout="row" layout-align="start center">' +
'           <md-button aria-label="Search" class="md-icon-button">' +
'             <img src="images/icons/search.png"/>' +
'           </md-button>' +
'           <input class="ipt-search" type="text" ng-model="txt_search" placeholder="Search">' +
'         </div>' +
'         <md-divider></md-divider>' +
'         <div flex="none" layout="column" class="div-db-content-table"  style="height: 30vh;"> ' +
'           <div ng-show="showCustomer">' +
'             <div flex="none" layout="column" ng-repeat="customer in customerList | filter : txt_search | orderBy : \'cust_code\': false">' +
'               <md-whiteframe class="md-whiteframe-2dp" flex="none" layout="column" ng-style="{\'background-color\':whf_cust_list[$index]}">' +
'                 <div flex="none" layout="row" layout-align="space-between center">' +
'                   <div flex="25" ng-click="loadEditCust($event, customer.id)">' +
'                     <label class="lbl-table-content">' +
'                       <i style="font-size: 14px; color: DarkCyan; cursor: pointer;">' +
'                         {{customer.cust_code}}' +
'                       </i>' +
'                     </label>' +
'                   </div>' +
'                   <div flex="60" ng-click="loadEditCust($event, customer.id)">' +
'                     <label class="lbl-table-content" style="cursor: pointer;">' +
'                       {{customer.cust_name}}' +
'' +
'                     </label>' +
'                   </div>' +
'                   <div flex="15" ayout="row" layout-align="end center">' +
'                     <md-menu>' +
'                       <md-button aria-label="Open menu with custom trigger" class="md-icon-button" ng-click="openMainMenu($mdMenu, $event, $index)">' +
'                         <img src="images/icons/list_black.png"/>' +
'                       </md-button>' +
'                       <md-menu-content width="4" ng-mouseleave="closeMainMenu($mdMenu, $event, $index)"  style="max-height: 90vh;">' +
'                         <div ng-repeat="menu in userModules">' +
'                           <div ng-if="menu[\'module_name\'] != \'Customer\' && menu[\'module_name\'] != \'Vendor\' && menu[\'module_name\'] != \'Reports\'">' +
'                           <div flex="none" layout="row">' +
'                             <div flex="70" ng-click="loadCustomMenu(\'Customer\', menu.module_name, customer.cust_code, customer.process_type);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu.module_name}}' +
'' +
'' +
'                             </div>' +
'                             <div flex="10">' +
'                               <md-button class="md-icon-button" ng-click="loadLandPage(menu.module_name, customer.cust_code, customer.process_type)" style="text-align:  right;" aria-label="Menu Item">' +
'                               <img src="images/icons/add_black.png"/>' +
'                             </md-button>' +
'                             </div>' +
'                           </div>' +
'                           </div>' +
'                           <div ng-if=" menu[\'module_name\'] == \'Reports\'">' +
'                           <div flex="none" layout="row">' +
'                             <div flex="70" ng-click="loadCustomMenu(\'Customer\', menu.module_name, customer.cust_code);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu.module_name}}' +
'' +
'' +
'                             </div>' +
'                             <div flex="10">' +
'                               ' +
'                             </div>' +
'                           </div>' +
'                           </div>' +
'                         </div>' +
'                       </md-menu-content>' +
'                     </md-menu> ' +
'                   </div>          ' +
'                 </div>          ' +
'               </md-whiteframe>' +
'             </div>' +
'           </div>' +
'           <div flex="none" layout="column" layout-align="center center" ng-show="showNoCustMsg">' +
'             <label class="lbl-content-header" style="margin-top: 80px;">' +
'               No Customers are added' +
'             </label>' +
'             ' +
'           </div>' +
'           <div ng-show="showVendor">' +
'             <div flex="none" layout="column" ng-repeat="vendor in vendorList | filter : txt_search | orderBy : \'vend_code\': false">' +
'               <md-whiteframe class="md-whiteframe-2dp" flex="none" layout="column" ng-style="{\'background-color\':whf_cust_list[$index]}">' +
'                 <div flex="none" layout="row" layout-align="space-between center">' +
'                   <div flex="25" ng-click="loadEditVend($event, vendor.id)"> ' +
'                     <label class="lbl-table-content">' +
'                       <i style="font-size: 14px; color: DarkCyan; cursor: pointer;">' +
'                         {{vendor.vend_code}}' +
'                       </i>' +
'                     </label>' +
'                   </div>' +
'                   <div flex="60" ng-click="loadEditVend($event, vendor.id)">' +
'                     <label class="lbl-table-content" style="cursor: pointer;">' +
'                       {{vendor.vend_name}}' +
'' +
'                     </label>' +
'                   </div>' +
'                   <div flex="15" ayout="row" layout-align="end center">         ' +
'                     <md-menu>' +
'                       <md-button aria-label="Open menu with custom trigger" class="md-icon-button" ng-click="openMainMenu($mdMenu, $event, $index)">' +
'                         <img src="images/icons/list_black.png"/>' +
'                       </md-button>' +
'                       <md-menu-content width="4" ng-mouseleave="closeMainMenu($mdMenu, $event, $index)"  style="max-height: 90vh;">' +
'                         <div flex="none" layout="row">' +
'                           <div flex="70" ng-click="loadCustomMenu(\'Vendor\', \'Delivery List\', vendor.vend_code);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">' +
'                             Delivery' +
'                           </div>' +
'                           <div flex="10">' +
'                             <md-button class="md-icon-button" ng-click="loadVendLandPage(\'Delivery\', vendor.vend_code)" style="text-align:  right;" aria-label="Menu Item">' +
'                               <img src="images/icons/add_black.png"/>' +
'                             </md-button>' +
'                           </div>' +
'                         </div>' +
'                         <div ng-repeat="menu in userModules">' +
'                           <div ng-if="menu[\'module_name\'] != \'Customer\' && menu[\'module_name\'] != \'Vendor\' && menu[\'module_name\'] != \'Invoice\' && menu[\'module_name\'] != \'Reports\' && menu[\'module_name\'] != \'Customer Order\' && menu[\'module_name\'] != \'Delivery\'">' +
'                             <div flex="none" layout="row">' +
'                               <div flex="70" ng-click="loadCustomMenu(\'Vendor\', menu.module_name, vendor.vend_code);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu.module_name}}' +
'' +
'' +
'                               </div>' +
'                               <div flex="10">' +
'                                 <md-button class="md-icon-button" ng-click="loadVendLandPage(menu.module_name, vendor.vend_code)" style="text-align:  right;" aria-label="Menu Item">' +
'                                   <img src="images/icons/add_black.png"/>' +
'                                 </md-button>' +
'                               </div>' +
'                             </div>' +
'                           </div>' +
'                           <div ng-if=" menu[\'module_name\'] == \'Reports\'">' +
'                             <div flex="none" layout="row"> ' +
'                               <div flex="70" ng-click="loadCustomMenu(\'Vendor\',menu.module_name, vendor.vend_code);" style="font-size: 14px; cursor: pointer; min-height: 20px; height: 20px; padding-left: 16px; padding-left: 16px; margin-top: 10px;  margin-bottom: 10px;">{{menu.module_name}}' +
'' +
'' +
'                               </div>' +
'                               <div flex="10">' +
'                                 ' +
'                               </div>' +
'                             </div>' +
'                           </div>' +
'                         </div>                  ' +
'                       </md-menu-content>' +
'                     </md-menu> ' +
'                   </div>' +
'                 </div>          ' +
'               </md-whiteframe>' +
'             </div>' +
'           </div>' +
'           <div flex="none" layout="column" layout-align="center center" ng-show="showNoVendMsg">' +
'             <label class="lbl-content-header"  style="margin-top: 80px;">' +
'               No Vendors are added' +
'             </label>            ' +
'           </div>' +
'         </div>' +
'       </div>' +
'     </div>' +
'   </div>   ' +
' </div>' +
'</div>'); 

  }

  export default UserTemplates;