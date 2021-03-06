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
	ui = dom.xmlPanel(fl.configURI + "Commands/Add Suffix to Linkage.xml");

	if (!ui.suffix || ui.suffix == "")
	{
		
	}
	else
	{
		var suffix = ui.suffix,
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
			fl.trace("Add Suffix to Linkage");
			fl.trace("target document: " + dom.name);
			fl.trace("your suffix: " + suffix);
			var suffixlength = suffix.length,
				l = items.length,
				linkage;
			
			for (var i = 0; i < l; i++)
			{
				if (items[i].linkageClassName)
				{
					linkage = items[i].linkageClassName;
					if (linkage.substr(-suffixlength) != suffix) 
					{
						fl.trace("\t" + linkage + " -> " + linkage + suffix);
						items[i].linkageClassName = linkage + suffix;
					}
				}
			}
		}
	}
}
