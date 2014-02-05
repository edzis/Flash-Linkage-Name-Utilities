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
	ui = dom.xmlPanel(fl.configURI + "Commands/Add Prefix to Linkage.xml");

	if (!ui.prefix || ui.prefix == "")
	{
		
	}
	else
	{
		var prefix = ui.prefix,
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
			fl.trace("Add Prefix to Linkage");
			fl.trace("target document: " + dom.name);
			fl.trace("your prefix: " + prefix);
			var prefixlength = prefix.length,
				l = items.length,
				linkage;
			
			for (var i = 0; i < l; i++)
			{
				if (items[i].linkageClassName)
				{
					linkage = items[i].linkageClassName;
					if (linkage.substr(0, prefixlength) != prefix) 
					{
						fl.trace("\t" + linkage + " -> " + prefix + linkage);
						items[i].linkageClassName = prefix + linkage;
					}
				}
			}
		}
	}
}
