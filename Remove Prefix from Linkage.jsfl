﻿////////////////////////////////////////////////////////////////////////////////
//
//  feb19
//  Copyright 2012 Nobuhiro Takahashi
//  All Rights Reserved.
//
////////////////////////////////////////////////////////////////////////////////

var dom = fl.getDocumentDOM();

if (!dom)
{
	fl.trace("not file found");
}
else
{
	ui = dom.xmlPanel(fl.configURI + "Commands/Remove Prefix from Linkage.xml");

	if (!ui.count || ui.count == "")
	{
		
	}
	else
	{
		var count = ui.count,
			items = dom.library.getSelectedItems();

		if (!items || items.length <= 0) {
			items = dom.library.items;
		}
		
		if (!items || items.length <= 0) {
			fl.trace("no library items!");
		}
		else
		{
			fl.trace("----------------------------------------");
			fl.trace("Remove Prefix from Linkage");
			fl.trace("target document: " + dom.name);
			fl.trace("remove count: " + count);
			var length = parseInt(count),
				l = items.length,
				linkage;
			
			for (var i = 0; i < l; i++)
			{
				if (items[i].linkageClassName)
				{
					linkage = items[i].linkageClassName;
					
					fl.trace("\t" + linkage + " -> " + linkage.substr(count));
					items[i].linkageClassName = linkage.substr(count);
				}
			}
		}
	}
}
