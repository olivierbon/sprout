class f{constructor(){const o=document.querySelectorAll(".sitemap-settings .lightswitch"),l=document.querySelectorAll(".sitemap-settings select"),t=document.querySelectorAll(".sitemap-settings input.sitemap-custom-url"),a=document.querySelectorAll("#custom-pages tbody tr td a.delete");for(const e of o)e.addEventListener("click",this.updateSitemap);for(const e of l)e.addEventListener("change",this.updateSitemap);for(const e of t)e.addEventListener("change",this.updateSitemap);for(const e of a)e.addEventListener("click",this.deleteCustomPage)}updateSitemap(o){let l=o.target,t=$(l).closest("tr"),a=t.data("rowid");t.data("isNew");let e=$('input[name="sitemaps[sections]['+a+'][enabled]"]').val(),c=$('input[name="siteId"]').val(),r=$('input[name="sitemaps[sections]['+a+'][uri]"]').val(),d=$('tr[data-rowid="'+a+'"] td span.status'),p={sitemapMetadataId:t.data("sitemap-metadata-id"),type:t.data("type"),elementGroupId:t.data("elementGroupId"),uri:r,priority:$('select[name="sitemaps[sections]['+a+'][priority]"]').val(),changeFrequency:$('select[name="sitemaps[sections]['+a+'][changeFrequency]"]').val(),enabled:e,siteId:c};Craft.postActionRequest("sprout-module-sitemaps/sitemaps/save-sitemap-metadata",p,$.proxy(function(i,y){if(y==="success")if(i.success){let u=a.split("-")[0],s=null;i.sitemapMetadata.elementGroupId?s=u+"-"+i.sitemapMetadata.elementGroupId:s=u+"-"+i.sitemapMetadata.id;let m=$(l).closest("tr"),g=m.find("a.sprout-sectiontitle");m.data("isNew")&&(g.attr("href","sections/"+i.sitemapMetadata.id),m.removeClass("sitemapsection-isnew"),m.data("isNew",0),m.data("sitemapMetadataId",i.sitemapMetadata.id),g.unbind("click"));let n='input[name="sitemaps[sections]['+a+"]";$(n+'[id]"]').val(s),$(n+'[id]"]').attr("name","sitemaps[sections]["+s+"][id]"),$(n+'[elementGroupId]"]').attr("name","sitemaps[sections]["+s+"][elementGroupId]"),$(n+'[priority]"]').attr("name","sitemaps[sections]["+s+"][priority]"),$(n+'[changeFrequency]"]').attr("name","sitemaps[sections]["+s+"][changeFrequency]"),$(n+'[enabled]"]').attr("name","sitemaps[sections]["+s+"][enabled]"),Craft.cp.displayNotice(Craft.t("sprout-module-sitemaps","Sitemap metadata saved."))}else Craft.cp.displayError(Craft.t("sprout-module-sitemaps","Unable to save Sitemap metadata."))},this)),e?(d.removeClass("disabled"),d.addClass("live")):(d.removeClass("live"),d.addClass("disabled"))}deleteCustomPage(o){let t=o.target.parentElement.parentElement,e={id:t.getAttribute("data-sitemap-metadata-id")};Craft.postActionRequest("sprout-module-sitemaps/sitemaps/delete-sitemap-by-id",e,$.proxy(function(c,r){c.success&&t.remove(),document.querySelectorAll("#custom-pages tbody tr").length<=0&&document.getElementById("custom-pages").remove()},this))}}window.SproutSeoSitemapIndex=f;
//# sourceMappingURL=sitemaps-2027389d.js.map
