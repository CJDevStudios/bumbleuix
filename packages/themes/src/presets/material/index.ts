import type { Preset } from '@cjdevstudios/bumbleuix-themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@cjdevstudios/bumbleuix-themes/material/accordion';
import autocomplete from '@cjdevstudios/bumbleuix-themes/material/autocomplete';
import avatar from '@cjdevstudios/bumbleuix-themes/material/avatar';
import badge from '@cjdevstudios/bumbleuix-themes/material/badge';
import base from '@cjdevstudios/bumbleuix-themes/material/base';
import blockui from '@cjdevstudios/bumbleuix-themes/material/blockui';
import breadcrumb from '@cjdevstudios/bumbleuix-themes/material/breadcrumb';
import button from '@cjdevstudios/bumbleuix-themes/material/button';
import card from '@cjdevstudios/bumbleuix-themes/material/card';
import carousel from '@cjdevstudios/bumbleuix-themes/material/carousel';
import cascadeselect from '@cjdevstudios/bumbleuix-themes/material/cascadeselect';
import checkbox from '@cjdevstudios/bumbleuix-themes/material/checkbox';
import chip from '@cjdevstudios/bumbleuix-themes/material/chip';
import colorpicker from '@cjdevstudios/bumbleuix-themes/material/colorpicker';
import confirmdialog from '@cjdevstudios/bumbleuix-themes/material/confirmdialog';
import confirmpopup from '@cjdevstudios/bumbleuix-themes/material/confirmpopup';
import contextmenu from '@cjdevstudios/bumbleuix-themes/material/contextmenu';
import datatable from '@cjdevstudios/bumbleuix-themes/material/datatable';
import dataview from '@cjdevstudios/bumbleuix-themes/material/dataview';
import datepicker from '@cjdevstudios/bumbleuix-themes/material/datepicker';
import dialog from '@cjdevstudios/bumbleuix-themes/material/dialog';
import divider from '@cjdevstudios/bumbleuix-themes/material/divider';
import dock from '@cjdevstudios/bumbleuix-themes/material/dock';
import drawer from '@cjdevstudios/bumbleuix-themes/material/drawer';
import editor from '@cjdevstudios/bumbleuix-themes/material/editor';
import fieldset from '@cjdevstudios/bumbleuix-themes/material/fieldset';
import fileupload from '@cjdevstudios/bumbleuix-themes/material/fileupload';
import floatlabel from '@cjdevstudios/bumbleuix-themes/material/floatlabel';
import galleria from '@cjdevstudios/bumbleuix-themes/material/galleria';
import iconfield from '@cjdevstudios/bumbleuix-themes/material/iconfield';
import iftalabel from '@cjdevstudios/bumbleuix-themes/material/iftalabel';
import image from '@cjdevstudios/bumbleuix-themes/material/image';
import imagecompare from '@cjdevstudios/bumbleuix-themes/material/imagecompare';
import inlinemessage from '@cjdevstudios/bumbleuix-themes/material/inlinemessage';
import inplace from '@cjdevstudios/bumbleuix-themes/material/inplace';
import inputchips from '@cjdevstudios/bumbleuix-themes/material/inputchips';
import inputgroup from '@cjdevstudios/bumbleuix-themes/material/inputgroup';
import inputnumber from '@cjdevstudios/bumbleuix-themes/material/inputnumber';
import inputotp from '@cjdevstudios/bumbleuix-themes/material/inputotp';
import inputtext from '@cjdevstudios/bumbleuix-themes/material/inputtext';
import knob from '@cjdevstudios/bumbleuix-themes/material/knob';
import listbox from '@cjdevstudios/bumbleuix-themes/material/listbox';
import megamenu from '@cjdevstudios/bumbleuix-themes/material/megamenu';
import menu from '@cjdevstudios/bumbleuix-themes/material/menu';
import menubar from '@cjdevstudios/bumbleuix-themes/material/menubar';
import message from '@cjdevstudios/bumbleuix-themes/material/message';
import metergroup from '@cjdevstudios/bumbleuix-themes/material/metergroup';
import multiselect from '@cjdevstudios/bumbleuix-themes/material/multiselect';
import orderlist from '@cjdevstudios/bumbleuix-themes/material/orderlist';
import organizationchart from '@cjdevstudios/bumbleuix-themes/material/organizationchart';
import overlaybadge from '@cjdevstudios/bumbleuix-themes/material/overlaybadge';
import paginator from '@cjdevstudios/bumbleuix-themes/material/paginator';
import panel from '@cjdevstudios/bumbleuix-themes/material/panel';
import panelmenu from '@cjdevstudios/bumbleuix-themes/material/panelmenu';
import password from '@cjdevstudios/bumbleuix-themes/material/password';
import picklist from '@cjdevstudios/bumbleuix-themes/material/picklist';
import popover from '@cjdevstudios/bumbleuix-themes/material/popover';
import progressbar from '@cjdevstudios/bumbleuix-themes/material/progressbar';
import progressspinner from '@cjdevstudios/bumbleuix-themes/material/progressspinner';
import radiobutton from '@cjdevstudios/bumbleuix-themes/material/radiobutton';
import rating from '@cjdevstudios/bumbleuix-themes/material/rating';
import ripple from '@cjdevstudios/bumbleuix-themes/material/ripple';
import scrollpanel from '@cjdevstudios/bumbleuix-themes/material/scrollpanel';
import select from '@cjdevstudios/bumbleuix-themes/material/select';
import selectbutton from '@cjdevstudios/bumbleuix-themes/material/selectbutton';
import skeleton from '@cjdevstudios/bumbleuix-themes/material/skeleton';
import slider from '@cjdevstudios/bumbleuix-themes/material/slider';
import speeddial from '@cjdevstudios/bumbleuix-themes/material/speeddial';
import splitbutton from '@cjdevstudios/bumbleuix-themes/material/splitbutton';
import splitter from '@cjdevstudios/bumbleuix-themes/material/splitter';
import stepper from '@cjdevstudios/bumbleuix-themes/material/stepper';
import steps from '@cjdevstudios/bumbleuix-themes/material/steps';
import tabmenu from '@cjdevstudios/bumbleuix-themes/material/tabmenu';
import tabs from '@cjdevstudios/bumbleuix-themes/material/tabs';
import tabview from '@cjdevstudios/bumbleuix-themes/material/tabview';
import tag from '@cjdevstudios/bumbleuix-themes/material/tag';
import terminal from '@cjdevstudios/bumbleuix-themes/material/terminal';
import textarea from '@cjdevstudios/bumbleuix-themes/material/textarea';
import tieredmenu from '@cjdevstudios/bumbleuix-themes/material/tieredmenu';
import timeline from '@cjdevstudios/bumbleuix-themes/material/timeline';
import toast from '@cjdevstudios/bumbleuix-themes/material/toast';
import togglebutton from '@cjdevstudios/bumbleuix-themes/material/togglebutton';
import toggleswitch from '@cjdevstudios/bumbleuix-themes/material/toggleswitch';
import toolbar from '@cjdevstudios/bumbleuix-themes/material/toolbar';
import tooltip from '@cjdevstudios/bumbleuix-themes/material/tooltip';
import tree from '@cjdevstudios/bumbleuix-themes/material/tree';
import treeselect from '@cjdevstudios/bumbleuix-themes/material/treeselect';
import treetable from '@cjdevstudios/bumbleuix-themes/material/treetable';
import virtualscroller from '@cjdevstudios/bumbleuix-themes/material/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<MaterialBaseDesignTokens>;
