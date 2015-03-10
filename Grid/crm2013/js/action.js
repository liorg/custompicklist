function getCommonObjectType(sGridName){for(var a=$find(sGridName).get_innerGrid().get_selectedRecords(),i=1;i<a.length;i++)if(a[i][1]!=a[i-1][1])return null;return a[0][1]}function getSelected(sGridName){for(var a=$find(sGridName).get_innerGrid().get_selectedRecords(),backCompatArray=new Array(a.length),i=0;i<a.length;i++)backCompatArray[i]=a[i][0];return backCompatArray}function getSelectedRow(sGridName){return $find(sGridName).get_innerGrid().get_selectedRecords()}function isValidWindow(winObj){try{winObj.document.location;return true}catch(e){return false}}function getParentEntityIdParams(){var currWindow=window,oForm=null;do{oForm=currWindow.document.getElementById("crmFormSubmit");if(!IsNull(oForm))break;if(currWindow==currWindow.parent)break;if(!isValidWindow(currWindow.parent))break;currWindow=currWindow.parent}while(IsNull(oForm)&&!IsNull(currWindow));var sParams;if(!IsNull(oForm)){var crmFormSubmitId=oForm.crmFormSubmitId,crmFormSubmitObjectType=oForm.crmFormSubmitObjectType;if(!IsNull(crmFormSubmitId)&&!IsNull(crmFormSubmitObjectType)){sParams="?_CreateFromType="+CrmEncodeDecode.CrmUrlEncode(crmFormSubmitObjectType.getAttribute("value"));if(!IsNull(crmFormSubmitId.getAttribute("value")))sParams=sParams+"&_CreateFromId="+CrmEncodeDecode.CrmUrlEncode(crmFormSubmitId.getAttribute("value"))}}return sParams}function getNotSelected(sGridName){var innerGrid=$find(sGridName).get_innerGrid(),iTotal=innerGrid.get_numberOfRecords();if(iTotal==0)return false;for(var o=innerGrid.get_dataTableBody(),a=[],iLen=innerGrid.get_selectedRecords().length,ii=0,i=0;i<iTotal;i++){if(!o.rows[i].getAttribute("selected")){a[ii]=o.rows[i].getAttribute("oid");ii++}if(ii==iTotal-iLen)break}return a}function getSelectedSubTypes(sGridName){return $find(sGridName).get_innerGrid().get_selectedRecords()}function doAction(sGrid,iObjType,sAction,sObjId){var gridControl=$find(sGrid);if(gridControl){var selectedRecords=gridControl.get_selectedRecords(),etc=gridControl.get_entityTypeCode();if(etc==0||etc==7103)etc=iObjType;IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);switch(sAction){case "activate":return Mscrm.GridRibbonActions.activate(gridControl,selectedRecords,etc);case "addcustomeropportunityrole":return Mscrm.GridRibbonActions.addCustomerOpportunityRole(gridControl,selectedRecords,etc);case "addcustomerrelationship":return Mscrm.GridRibbonActions.addCustomerRelationship(gridControl,selectedRecords,etc);case "addnotes":return Mscrm.GridRibbonActions.addNotes(gridControl,selectedRecords,etc);case "addtolist":return Mscrm.GridRibbonActions.addToList(gridControl,selectedRecords,etc);case "addtoqueue":return Mscrm.GridRibbonActions.addToQueue(gridControl,selectedRecords,etc);case "assign":case "assignqueue":return Mscrm.GridRibbonActions.assignSelectedRecords(gridControl,selectedRecords,etc);case "bulkedit":return Mscrm.GridRibbonActions.bulkEdit(gridControl,selectedRecords,etc);case "bulkdelete":return Mscrm.GridRibbonActions.bulkDelete(gridControl);case "connect":return Mscrm.GridRibbonActions.addConnection(selectedRecords);case "deactivate":return Mscrm.GridRibbonActions.deactivate(gridControl,selectedRecords,etc);case "completeactivity":return Mscrm.GridRibbonActions.deactivate(gridControl,selectedRecords,etc,1);case "cancelactivity":return Mscrm.GridRibbonActions.deactivate(gridControl,selectedRecords,etc,2);case "changeorg":return Mscrm.SystemUserActions.changeBusinessUnit(gridControl,selectedRecords,etc);case "convertlead":return Mscrm.List.convertLead(gridControl,selectedRecords,etc);case "delete":return Mscrm.GridRibbonActions.deleteRecords(gridControl,selectedRecords,etc);case "detectduplicatesallrecords":return Mscrm.GridRibbonActions.detectDuplicatesAllRecords(gridControl,etc,gridControl.get_recordCount());case "detectduplicatesselectedrecords":return Mscrm.GridRibbonActions.detectDuplicatesSelectedRecords(etc,gridControl.get_selectedIds());case "editreport":return Mscrm.ReportActions.editReport(selectedRecords);case "editreportfilter":return Mscrm.ReportActions.editReportFilter(gridControl,selectedRecords);case "inviteuser":return Mscrm.SystemUserActions.sendInviteForLive(selectedRecords);case "merge":return Mscrm.GridRibbonActions.mergeRecords(gridControl,selectedRecords,etc);case "minicampaignallitemsonpage":return Mscrm.QuickCampaign.quickCampaignCurrentPage(gridControl,gridControl.get_allRecordIds(),etc);case "minicampaignallitemsonview":return Mscrm.QuickCampaign.quickCampaignAllPages(gridControl,gridControl.get_selectedIds(),etc);case "minicampaignselecteditems":return Mscrm.QuickCampaign.quickCampaignSelectedItems(gridControl,gridControl.get_selectedIds(),etc);case "promotetoadmin":return Mscrm.SystemUserActions.promoteToAdmin(gridControl,selectedRecords,etc);case "reportschedulewizard":return Mscrm.ReportActions.reportScheduleWizard(gridControl,selectedRecords,etc);case "role":return Mscrm.SystemUserActions.manageRoles(gridControl,selectedRecords,etc);case "share":return Mscrm.GridRibbonActions.shareSelectedRecords(gridControl,selectedRecords,etc);case "setregarding":return Mscrm.GridRibbonActions.setRegarding(gridControl,selectedRecords,etc);case "queueitemworkon":case "queueitemrelease":case "queueitemremove":case "queueitemroute":return Mscrm.QueueItem.queueManipulation(gridControl,selectedRecords,etc,sAction);case "queueitemdetail":return Mscrm.QueueItem.queueItemDetail(gridControl,selectedRecords,etc,sAction);case "viewreport":return Mscrm.ReportActions.viewReport(gridControl,selectedRecords);case "submit":case "approve":case "unpublish":case "articleview":return Mscrm.Article.articleRibbonActions(gridControl,selectedRecords,etc,sAction)}}var a,sCustParams="",arySubType,iLen,sIds="",crmForm=$get("crmForm",document),statuscode=$get("statuscode",crmForm);if(!sObjId)a=getSelected(sGrid);else a=new Array(sObjId);var iX=400,iY=200;switch(sAction){case "allowscheduling":iX=400;iY=225;break;case "runworkflow":launchOnDemandWorkflow(sGrid,iObjType);return;break;case "actsetrespon":iX=456;iY=310;break;case "changecaptain":iX=400;iY=225;break;case "changeparent":iX=400;iY=225;break;case "createopportunity":iX=700;iY=540;break;case "disallowscheduling":iX=400;iY=225;break;case "status":iX=456;iY=250;break;case "webmailmerge":iX=450;iY=500;break;case "mergeduplicates":iX=800;iY=570;break;case "cancel":iY=175;break}var bActionApplicable=true;if(!a||a.length==0)switch(sAction){case "resetdatafilters":case "uploadimportmap":case "addusers":case "showvisualization":case "enabledisablefilters":case "savefilterstocurrentview":case "importwizard":bActionApplicable=true;break;default:bActionApplicable=false;alert(LOCID_ACTION_NOITEMSELECTED)}if(bActionApplicable==true){var sSubTypes="",i,iRelationshipType=None;switch(sAction){case "applyrule":if(a.length>0){iObjType=getCommonObjectType(sGrid);if(IsNull(iObjType)){alert(LOCID_HETEROGENOUS_TYPES);return}sIds+=a[0]+";"}break;case "copyrole":if(a.length==1){copyRole(a[0]);auto(iObjType)}else alert(LOCID_ROLES_TOO_MANY);return;case "asyncOperationCancel":sAction="setstate_asyncoperation";sCustParams="&sNewState=Completed";break;case "asyncOperationResume":sAction="setstate_asyncoperation";sCustParams="&sNewState=Ready";break;case "asyncOperationPostpone":if(IsSelectedJobCompleted(sGrid))return;sAction="setstate_asyncoperation";sCustParams="&sNewState=Suspended";break;case "asyncOperationPause":sAction="setstate_asyncoperation";sCustParams="&sNewState=Paused";break;case "bulkDeleteCancel":sAction="setstate_bulkdelete";sCustParams="&sNewState=Completed";break;case "bulkDeleteResume":sAction="setstate_bulkdelete";sCustParams="&sNewState=Ready";break;case "bulkDeletePostpone":if(IsBulkDeleteJobCompleted(sGrid))return;sAction="setstate_bulkdelete";sCustParams="&sNewState=Suspended";break;case "bulkDeletePause":sAction="setstate_bulkdelete";sCustParams="&sNewState=Paused";break}var oResult;if(sAction=="resetdatafilters"){if(window.confirm(LOCID_RESET_DATA_FILTERS)){var command,filterTypeSelector=$get("FilterTypeSelector");if(IsNull(filterTypeSelector)||filterTypeSelector.getAttribute("value")=="offline")command=new RemoteCommand("UserQuery","ResetDataFilters");else command=new RemoteCommand("UserQuery","ResetOutlookFilters");var oResult=command.Execute();oResult.Success&&refreshGrid(sGrid)}}else if(sAction=="mergeduplicates"){for(var c=$get("baseRecordsIframe",parent.document),doc=c.contentWindow||c.contentDocument,b=$find("baseRecordsGrid",doc).control.get_innerGrid().get_selectedRecords(),baseRecord=new Array(b.length),i=0;i<b.length;i++)baseRecord[i]=b[i][0];if(a.length>1||baseRecord.length>1)alert(LOCID_MRGE_DUPS_TOOMANY_RCRDS);else{sIds=baseRecord[0];sIds+=";"+a[0];oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_merge.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),"",iX,iY)}}else if(sAction=="automergeduplicates"){for(var c=$get("baseRecordsIframe",parent.document),doc=c.contentWindow||c.contentDocument,b=$find("baseRecordsGrid",doc).control.get_innerGrid().get_selectedRecords(),baseRecord=new Array(b.length),i=0;i<b.length;i++)baseRecord[i]=b[i][0];if(a.length>1||baseRecord.length>1)alert(LOCID_MRGE_DUPS_TOOMANY_RCRDS);else{var commandMerge=new RemoteCommand("DuplicateDetection","AutoMergeDuplicates");commandMerge.SetParameter("masterId",baseRecord[0]);commandMerge.SetParameter("subordinateId",a[0]);commandMerge.SetParameter("objectTypeCode",iObjType);commandMerge.Execute();refreshGrid(sGrid)}}else if(sAction=="showvisualization"){var vizPane=$find("paneControl");!IsNull(vizPane)&&vizPane.showVisualization()}else if(sAction=="publishduplicaterule"){var oArgs={};oArgs.Ids=getSelected(sGrid);try{var command=new RemoteCommand("DuplicateDetection","IsSystemWideDuplicateDetectionEnabled"),result=command.Execute();if(result.ReturnValue==false){alert(LOCID_DEDUPE_DISABLE_ERR_MSG);return}}catch(e){}openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx"),oArgs.Ids,iX,iY,true,false,"maximize:yes;minimize:yes");refreshGridIfModal(sGrid)}else if(sAction=="modifyrecurrence"){var recurrenceCheck=true,command,result;sIds=a[0];if(iObjType==4424){var aIds=[];aIds.type="guid";for(var i=0;i<a.length;i++)aIds.push(a[i]);command=new RemoteCommand("BulkDelete","IsBulkDeleteJobRecurring");command.SetParameter("bulkDeleteIdList",aIds);result=command.Execute();recurrenceCheck=result.ReturnValue}else if(a.length==1){command=new RemoteCommand("DuplicateDetection","CanRecurrenceBeModified");command.SetParameter("jobId",a[0]);result=command.Execute();recurrenceCheck=result.ReturnValue}if(recurrenceCheck==false){alert(LOCID_MODIFY_RECURRENCE_ERR_MSG);return}else oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),a,500,350)}else if(sAction=="uploadimportmap"){var oUrl=Mscrm.CrmUri.create("/_grid/cmds/dlg_uploadimportmap.aspx");openStdDlg(oUrl,null,400,300,true,false,"maximize:no;minimize:no");refreshGridIfModal(sGrid)}else if(sAction=="deleteimportedrecords"||sAction=="deleteallimportedrecords"){var aIds=[];aIds.type="guid";for(var i=0;i<a.length;i++)aIds.push(a[i]);var command=new RemoteCommand("BulkDelete","CheckImportJobsStatus");command.SetParameter("importFileIdList",aIds);var result=command.Execute();if(result.Success==true){var oArgs={};oArgs.Ids=aIds;var mode="single";if(sAction=="deleteallimportedrecords")mode="all";var oUrl=Mscrm.CrmUri.create("/_grid/cmds/dlg_deleteimportedrecords.aspx");oUrl.get_query()["DeleteMode"]=mode;openStdDlg(oUrl,oArgs.Ids,600,520,true,false,"maximize:yes;minimize:yes")}}else if(sAction=="unpublishduplicaterule"){var oArgs={};oArgs.Ids=getSelected(sGrid);openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx"),oArgs.Ids,iX,iY,true,false,"maximize:yes;minimize:yes");refreshGridIfModal(sGrid)}else if(sAction=="publishmailmergetemplate"||sAction=="unpublishmailmergetemplate"){var oArgs={};oArgs.Ids=getSelected(sGrid);openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx"),oArgs.Ids,iX,iY,true,false,"maximize:yes;minimize:yes");refreshGridIfModal(sGrid)}else if(sAction=="copyto"){var parameters=[iObjType,a,sIds,iX,iY,sCustParams],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("copyToAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"single","4300",0,null,null,"1","1","0","","","","577EA96E-B1F6-499b-98A7-ABB5BE8233F9");if(Mscrm.Utilities.isModalDialogSupported())oResult=copyToAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams)}else if(sAction=="copylistmember"){var qs=new QueryString;_sListId=qs.get("oId","");var sMemberType=GetListMemberType(),parameters=[iObjType,a,sIds,iX,iY,sCustParams],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("copyToListAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"single","4300",0,null,"currentid="+CrmEncodeDecode.CrmUrlEncode(_sListId)+"&membertypecode="+CrmEncodeDecode.CrmUrlEncode(sMemberType)+"&listType="+CrmEncodeDecode.CrmUrlEncode("static"),"1","1","0","","","","577EA96E-B1F6-499b-98A7-ABB5BE8233F9");if(Mscrm.Utilities.isModalDialogSupported())oResult=copyToListAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams)}else if(sAction=="addtolist"){var parameters=[iObjType,a,sIds,iX,iY,sCustParams],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("addToListAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"single","4300",0,null,"membertypecode="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&listType="+CrmEncodeDecode.CrmUrlEncode("static"),1,1,false,"","","","577EA96E-B1F6-499b-98A7-ABB5BE8233F9",null,null,null,null);if(Mscrm.Utilities.isModalDialogSupported())oResult=addToListAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams)}else if(sAction=="addtocampaign"){var parameters=[iObjType,a,sIds,iX,iY,sCustParams],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("addToCampaignAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"single","4400","0");if(Mscrm.Utilities.isModalDialogSupported())oResult=addToCampaignAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams)}else if(sAction=="emailviamailmergeoff")alert(LOCID_PROPAGATE_MM_EXE_OFF);else if(sAction=="letterviamailmerge"||sAction=="faxviamailmerge"||sAction=="emailviamailmerge"){if(iObjType=="4402"&&statuscode.value!="1")alert(LOCID_PROPAGATE_ERROR);else if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty())alert(LOCID_PROPAGATE_DIRTY);else if(a.length!=0){var mergetype=0;if(Mscrm.Utilities.isIosDevice()){alert(LOCID_UNSUPPORTED_RIBBONACTION);return}if(sAction=="faxviamailmerge")mergetype=5;else if(sAction=="emailviamailmerge")mergetype=4;openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx?objectTypeCode="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&objectId="+CrmEncodeDecode.CrmUrlEncode(a[0])+"&mergetype="+CrmEncodeDecode.CrmUrlEncode(mergetype)),null,600,500,true,false,"maximize:yes;minimize:yes")}}else if(sAction=="listappointment"||sAction=="listletter"||sAction=="listfax"||sAction=="listphone"||sAction=="listemail"||sAction=="createopportunity"){sIds=a[0];if(iObjType=="4402"&&statuscode.value!="1")alert(LOCID_PROPAGATE_ERROR);else if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty())alert(LOCID_PROPAGATE_DIRTY);else if(a.length!=0){oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),a,820,615,true,false,"maximize:yes;minimize:yes");iObjType=="4402"&&oResult&&$find("crmForm").SubmitCrmForm(4,true,true,false)}}else if(sAction=="qualifylist"){a=getNotSelected(sGrid);if(a.length!=0){sIds=a[0];iLen=a.length;for(var i=1;i<iLen;i++)sIds+=";"+a[i]}var o=$get(sGrid),doc=o.contentWindow||o.contentDocument;if(doc.document)doc=doc.document;o=$get("frmGrid",doc);var viewId=gridControl.GetParameter("viewid");_sListId=gridControl.GetParameter("oId");var _fetchxml=null,_isDirty=false;_fetchxml=gridControl.GetParameter("listFetchXml");_isDirty=gridControl.GetParameter("isDirty");_isDirty==null&&gridControl.SetParameter("isDirty","false");var oParams="iListId="+CrmEncodeDecode.CrmUrlEncode(_sListId)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+"&savedQueryId="+CrmEncodeDecode.CrmUrlEncode(viewId)+"&isDirty="+CrmEncodeDecode.CrmUrlEncode(_isDirty);oResult=OpenQualWin(_fetchxml,oParams,a)}else if(sAction=="changeTaskstate"){sIds=a;oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_deactivate.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+"&bulkChangeStateMode=1"+sCustParams),a,iX,iY)}else if(sAction=="reactivateCR")oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_activate.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+"&bulkChangeStateMode=1"+sCustParams),a,iX,iY);else if(sAction=="updatecustomstring"){if(a.length>1){alert(LOCID_CUSTMSG_TOOMANY_REC);return}oResult=openObj(DisplayString,a[0])}else if(sAction=="applyrule"){sRet=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),a,iX,iY);oResult=sRet==null;if(!oResult){arySubType=getSelectedSubTypes(sGrid);for(var len=arySubType.length,i=0;i<len;i++)if(sRet==arySubType[i][0]){$find(sGrid).get_innerGrid().UnselectRecords(arySubType[i][3]);break}oResult=false}}else if(sAction=="nochannel"){if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty()){alert(LOCID_PROPAGATE_DIRTY);return}alert(LOCID_PROPAGATE_ERROR_NOCHANNEL);return}else if(sAction=="invalidchannel"){if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty()){alert(LOCID_PROPAGATE_DIRTY);return}alert(LOCID_PROPAGATE_ERR_INVLIDCHNL);return}else if(sAction=="invalidmailmergechannel"){if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty()){alert(LOCID_PROPAGATE_DIRTY);return}alert(LOCID_P_ERR_INVLIDCHNL_MM);return}else if(sAction=="nochannelfield"){if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty()){alert(LOCID_PROPAGATE_DIRTY);return}alert(LOCID_PROPAGATE_ERR_NOCHNLFLD);return}else if(sAction=="nolistassociated"){if(iObjType==CampaignActivity&&$find("crmForm").get_isDirty()){alert(LOCID_PROPAGATE_DIRTY);return}alert(LOCID_PROPAGATE_ERR_NOLISTASSOC);return}else if(sAction=="inviteusernotavailable"){openStdWin(Mscrm.CrmUri.create(LOCID_INVITE_NOTAVAILABLE_URL));return}else if(sAction=="addusers"){if(Mscrm.Utilities.isIosDevice()){alert(LOCID_UNSUPPORTED_RIBBONACTION);return}oResult=openStdDlg(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=2631659F-A668-4A48-833B-D20E187B5A89"),null,800,530,true)}else if(sAction=="setstate_bulkdelete"){iObjType=AsyncOperation;sAction="setstate_asyncoperation";var aGuids=[];aGuids.type="guid";for(var i=0;i<a.length;i++)aGuids.push(a[i]);var command=new RemoteCommand("BulkDelete","GetAsyncJobIds");command.SetParameter("bulkDeleteIdList",aGuids);var result=command.Execute();if(result.ReturnValue.string!=null){var aId=typeof result.ReturnValue.string=="string"?new Array(result.ReturnValue.string):result.ReturnValue.string;oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),aId,iX,iY)}}else if(sAction=="enabledisablefilters"){var filterSet=$find(sGrid+"_filterSet");if(!(typeof filterSet=="undefined"||IsNull(filterSet)))filterSet.ToggleFilters(true);else alert(LOCID_FILTERS_NOT_SUPPORTED)}else if(sAction=="savefilterstocurrentview"){var filterSet=$find(sGrid+"_filterSet");if(!(typeof filterSet=="undefined"||IsNull(filterSet))&&filterSet.IsFilterEnabled()){if(!Mscrm.RibbonActions.isUserQuerySelected(gridControl)){alert(LOCID_CANT_SAVE_FILTER);return}return filterSet.Save()}}else oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams),a,iX,iY);oResult&&Mscrm.Utilities.isModalDialogSupported()&&auto(iObjType)}}function copyToListAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams){var bMakeCall=false,oResult;if(lookupItems)if(lookupItems.items.length>0){var itemObjectId=lookupItems.items[0].id,itemObjectTypeCode=lookupItems.items[0].type;bMakeCall=true}if(bMakeCall){oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_addtolist.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&autoTrigger=1&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams+"&itemObjectId="+CrmEncodeDecode.CrmUrlEncode(itemObjectId)+"&itemObjectTypeCode="+CrmEncodeDecode.CrmUrlEncode(itemObjectTypeCode)),a,iX,iY);oResult=false}return oResult}function addToListAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams){var oResult;if(lookupItems)if(lookupItems.items.length>0){var itemObjectId=lookupItems.items[0].id,itemObjectTypeCode=lookupItems.items[0].type;oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_addtolist.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&autoTrigger=1&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams+"&itemObjectId="+CrmEncodeDecode.CrmUrlEncode(itemObjectId)+"&itemObjectTypeCode="+CrmEncodeDecode.CrmUrlEncode(itemObjectTypeCode)),a,iX,iY);oResult=false}return oResult}function copyToAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams){var oResult;if(lookupItems)if(lookupItems.items.length>0){var itemObjectId=lookupItems.items[0].id,itemObjectTypeCode=lookupItems.items[0].type;oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_copyto.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams+"&itemObjectId="+CrmEncodeDecode.CrmUrlEncode(itemObjectId)+"&itemObjectTypeCode="+CrmEncodeDecode.CrmUrlEncode(itemObjectTypeCode)),a,iX,iY)}return oResult}function addToCampaignAction(lookupItems,iObjType,a,sIds,iX,iY,sCustParams){var oResult;if(lookupItems)if(lookupItems.items.length>0){iX=450;iY=250;itemObjectId=lookupItems.items[0].id;itemObjectTypeCode=lookupItems.items[0].type;oResult=openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_addtocampaign.aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+"&sIds="+CrmEncodeDecode.CrmUrlEncode(sIds)+sCustParams+"&itemObjectId="+CrmEncodeDecode.CrmUrlEncode(itemObjectId)+"&itemObjectTypeCode="+CrmEncodeDecode.CrmUrlEncode(itemObjectTypeCode)),a,iX,iY);oResult=false}return oResult}function refreshGrid(sGrid){$find(sGrid).Refresh()}function refreshGridIfModal(sGrid){Mscrm.Utilities.isModalDialogSupported()&&refreshGrid(sGrid)}function launchOnDemandWorkflow(sGrid,iObjType,workflowId){var gridControl=$find(sGrid);IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);Mscrm.GridRibbonActions.launchOnDemandWorkflow(gridControl,gridControl.get_selectedRecords(),iObjType,workflowId)}function runScript(sGrid,iObjType){var gridControl=$find(sGrid);IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);Mscrm.GridRibbonActions.runScript(gridControl.get_selectedRecords(),iObjType)}function doActionEx(sGrid,iObjType,sParentId,sAction,iParentType,sParams){var a=getSelected(sGrid),iX=400,iY=200;if(iObjType=="4301"&sAction=="delete")iX=450;if(!a||a.length==0)alert(LOCID_ACTION_NOITEMSELECTED);else{if(!sParams)sParams="";else if(sParams.charAt(0)!="&")sParams="&"+sParams;if(sAction=="createopportunity")openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&sParentId="+CrmEncodeDecode.CrmUrlEncode(sParentId)+"&iParentType="+CrmEncodeDecode.CrmUrlEncode(iParentType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+sParams),a,800,550,true,false,"maximize:yes;minimize:yes")&&refreshGridIfModal(sGrid);else openStdDlg(Mscrm.CrmUri.create("/_grid/cmds/dlg_"+CrmEncodeDecode.CrmUrlEncode(sAction)+".aspx?iObjType="+CrmEncodeDecode.CrmUrlEncode(iObjType)+"&sParentId="+CrmEncodeDecode.CrmUrlEncode(sParentId)+"&iParentType="+CrmEncodeDecode.CrmUrlEncode(iParentType)+"&iTotal="+CrmEncodeDecode.CrmUrlEncode(a.length)+sParams),a,iX,iY)&&refreshGridIfModal(sGrid)}}function GetParentObject(parentId,parentObjectTypeCode){if(typeof parentId=="undefined"||IsNull(parentId)||typeof parentObjectTypeCode=="undefined"||IsNull(parentObjectTypeCode)){var crmFormSubmit=$get("crmFormSubmit");if(IsNull(crmFormSubmit))crmFormSubmit=window.parent.document.getElementById("crmFormSubmit");Mscrm.CrmDebug.assert(!IsNull(crmFormSubmit),"Required crmFormSubmit is null.");parentId=crmFormSubmit.crmFormSubmitId.value;parentObjectTypeCode=crmFormSubmit.crmFormSubmitObjectType.value}var data={id:parentId,objectTypeCode:parentObjectTypeCode};return data}function locAssocOneToMany(iType,sRelationshipName,parentId,parentObjectTypeCode){var parent=GetParentObject(parentId,parentObjectTypeCode),showNewButton=iType==ActivityPointer?"0":"1",showPropButton=iType==ActivityPointer?"0":"1",additionalParams="currentid="+CrmEncodeDecode.CrmUrlEncode(parent.id),parameters=[iType,sRelationshipName,parent],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("assocOneToManyAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"multi",iType,0,null,additionalParams,showNewButton,showPropButton);Mscrm.Utilities.isModalDialogSupported()&&assocOneToManyAction(lookupItems,iType,sRelationshipName,parent)}function assocOneToManyAction(lookupItems,iType,sRelationshipName,parent){if(lookupItems){if(lookupItems.items.length>0)for(var commandAssociate=new RemoteCommand("AssociateRecords","AssociateOneToMany"),i=0,objs=lookupItems.items,iLength=objs.length,i=0;i<iLength;++i){commandAssociate.SetParameter("childType",iType);commandAssociate.SetParameter("childId",objs[i].id);commandAssociate.SetParameter("parentType",parent.objectTypeCode);commandAssociate.SetParameter("parentId",parent.id);commandAssociate.SetParameter("relationshipName",sRelationshipName);if(!commandAssociate.Execute().Success)break}try{auto(iType)}catch(e){}}}function locAssocObj(iType,sSubType,sAssociationName,iRoleOrdinal,additionalParams,parentId,parentObjectTypeCode){var parent=GetParentObject(parentId,parentObjectTypeCode),parameters=[iType,sSubType,sAssociationName,iRoleOrdinal,parent],callbackRef=Mscrm.Utilities.createCallbackFunctionObject("locAssocObjAction",this,parameters),lookupItems=LookupObjectsWithCallback(callbackRef,null,"multi",iType,0,null,additionalParams);Mscrm.Utilities.isModalDialogSupported()&&locAssocObjAction(lookupItems,iType,sSubType,sAssociationName,iRoleOrdinal,parent)}function locAssocObjAction(lookupItems,iType,sSubType,sAssociationName,iRoleOrdinal,parent){if(lookupItems)lookupItems.items.length>0&&AssociateObjects(parent.objectTypeCode,parent.id,iType,lookupItems,iRoleOrdinal==2,sSubType,sAssociationName)}function CreateNewTemplate(){openStdDlg(Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/emailtemplateproperties.aspx?isPersonal=0"),window,400,200)}function AssociateObjects(type1,id1,type2,objects,parentInitiated,sSubType,sAssociationName){var commandAssociate=new RemoteCommand("AssociateRecords","Associate");if(IsNull(sAssociationName))sAssociationName="";if(IsNull(sSubType))sSubType="";else{var aTypes=sSubType.split("=");if(aTypes.length==2&&aTypes[0]=="subType")sSubType=aTypes[1]}commandAssociate.SetParameter("subType",sSubType);var i=0,objs=objects.items,iLength=objs.length;if(parentInitiated)for(i=0;i<iLength;i++){commandAssociate.SetParameter("objectType",type1);commandAssociate.SetParameter("parentObjectType",type2);commandAssociate.SetParameter("objectId",id1);commandAssociate.SetParameter("parentId",objs[i].id);commandAssociate.SetParameter("associationName",sAssociationName);if(!commandAssociate.Execute().Success)break}else for(i=0;i<iLength;i++){commandAssociate.SetParameter("objectType",type2);commandAssociate.SetParameter("parentObjectType",type1);commandAssociate.SetParameter("objectId",objs[i].id);commandAssociate.SetParameter("parentId",id1);commandAssociate.SetParameter("associationName",sAssociationName);if(!commandAssociate.Execute().Success)break}try{auto(type2)}catch(e){}}function SendBulkEmail(sGridName,iObjectTypeCode){var ids=getSelected(sGridName),gridControl=$find(sGridName);IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);Mscrm.GridRibbonActions.sendBulkEmail(gridControl,ids,iObjectTypeCode,gridControl.get_innerGrid().get_numberOfRecords())}function WebMailMerge(sGridName,iObjectTypeCode){var ids=getSelected(sGridName),gridControl=$find(sGridName);IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);Mscrm.GridRibbonActions.webMailMerge(gridControl,ids,iObjectTypeCode,gridControl.get_innerGrid().get_numberOfRecords())}function getAll(sGridName){for(var a=$find(sGridName).get_innerGrid().get_allRecords(),backCompatArray=new Array(a.length),i=0;i<a.length;i++)backCompatArray[i]=a[i][0];return backCompatArray}function QueryString(){for(var querystring=location.search.substring(1,location.search.length),args=querystring.split("&"),i=0;i<args.length;i++){var pair=args[i].split("=");temp=CrmEncodeDecode.CrmUrlDecode(pair[0]);this[temp]=CrmEncodeDecode.CrmUrlDecode(pair[1])}this.get=QueryString_get}function QueryString_get(strKey,strDefault){var value=this[strKey];if(value==null)value=strDefault;return value}function IsBulkDeleteJobCompleted(sGrid){try{for(var selectedItems=getSelectedSubTypes(sGrid),subtype,i=0;i<selectedItems.length;i++){subtype=selectedItems[i][3].statecode;if(subtype==3){alert(LOCID_POSTPONE_BULKDELETE_JOB);return true}}}catch(e){if(!IsNull(document.getElementById("statuscode"))&&!IsNull(document.getElementById("statuscode")[0])&&!IsNull(document.getElementById("statuscode")[0].value))if(document.getElementById("statuscode")[0].value==30){alert(LOCID_POSTPONE_BULKDELETE_JOB);return true}}return false}function IsSelectedJobCompleted(sGrid){try{for(var selectedItems=getSelectedSubTypes(sGrid),subtype,i=0;i<selectedItems.length;i++){subtype=selectedItems[i][3].statecode;if(subtype==3){alert(LOCID_POSTPONE_COMPLETED_JOB);return true}}}catch(e){}return false}function SendCurrentViewUrl(sGridName,bUsingEmail){var gridControl=$find(sGridName);IsNull(Mscrm.GridRibbonActions)&&Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"),true);Mscrm.GridRibbonActions.sendCurrentViewUrl(bUsingEmail,gridControl)}function SendSelectedRecordsUrl(bUsingEmail,sGrid,iObjType){var gridControl=$find(sGrid);Mscrm.Utilities.sendSelectedRecordsUrl(bUsingEmail,gridControl.get_selectedRecords(),gridControl.get_entityTypeCode())}function RunFunctionFromParentOrSelf(sFunctionName,param1,param2,param3,param4,param5){var func=window.parent[sFunctionName];if(IsNull(func)||typeof func!="function")func=window.self[sFunctionName];Mscrm.CrmDebug.assert(!IsNull(func)&&typeof func==="function","Function '"+sFunctionName+"' is not found in window.parent nor in window.self");func(param1,param2,param3,param4,param5)}function openUrlFromGrid(e){try{var e=e||event,o=e.target||e.srcElement;if(!IsNull(o)){while(o.tagName!="A")o=o.parentNode;var url=Trim(CrmEncodeDecode.CrmUrlDecode(o.targetUrl||o.href));if(!isNullOrEmptyString(url)){switch(validateUrlProtocol(url)){case 0:url="http://"+url;break;case 1:break;default:return null}var windowHandle=safeWindowOpen(Mscrm.CrmUri.create(url),"","height="+screen.availHeight*.75+",width="+screen.availWidth*.75+",scrollbars=1,resizable=1,status=1,toolbar=1,menubar=1,location=1",false);!IsNull(windowHandle)&&windowHandle.focus()}}}catch(e){}return false}function openPhoneNumberFromGrid(e){try{var o=e.target||e.srcElement;if(!IsNull(o)){while(o.tagName!="A")o=o.parentNode;var phoneNumber=XUI.Html.GetText(o),LOCID_COUNTRY_CODE="";if(!isNullOrEmptyString(phoneNumber)){if(o.hasAttribute("country_code"))LOCID_COUNTRY_CODE=o.getAttribute("country_code");Mscrm.Shortcuts.openPhoneWindow(phoneNumber,LOCID_COUNTRY_CODE)}}}catch(e){}return false}function DownLoadMap(importMapId,gridRecordsNumber){(importMapId==null||gridRecordsNumber<1)&&alert(LOCID_DWNLDMAP_SLCT_ONERECORD);if(gridRecordsNumber==1){var exportMap=null;if(!IsNull(document.getElementById("exportMap")))exportMap=document.getElementById("exportMap");else{exportMap=document.createElement("form");exportMap.setAttribute("method","post");exportMap.setAttribute("target","_top");document.body.appendChild(exportMap)}exportMap.action=Mscrm.CrmUri.create("/tools/managemaps/downloadimportmap.aspx?id="+CrmEncodeDecode.CrmUrlEncode(importMapId)).toString();exportMap.submit()}else gridRecordsNumber>1&&alert(LOCID_DOWNLOADMAP_ERROR)}