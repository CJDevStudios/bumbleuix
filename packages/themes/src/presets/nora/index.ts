import type { Preset } from '@cjdevstudios/bumbleuix-themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@cjdevstudios/bumbleuix-themes/nora/accordion';
import autocomplete from '@cjdevstudios/bumbleuix-themes/nora/autocomplete';
import avatar from '@cjdevstudios/bumbleuix-themes/nora/avatar';
import badge from '@cjdevstudios/bumbleuix-themes/nora/badge';
import base from '@cjdevstudios/bumbleuix-themes/nora/base';
import blockui from '@cjdevstudios/bumbleuix-themes/nora/blockui';
import breadcrumb from '@cjdevstudios/bumbleuix-themes/nora/breadcrumb';
import button from '@cjdevstudios/bumbleuix-themes/nora/button';
import card from '@cjdevstudios/bumbleuix-themes/nora/card';
import carousel from '@cjdevstudios/bumbleuix-themes/nora/carousel';
import cascadeselect from '@cjdevstudios/bumbleuix-themes/nora/cascadeselect';
import checkbox from '@cjdevstudios/bumbleuix-themes/nora/checkbox';
import chip from '@cjdevstudios/bumbleuix-themes/nora/chip';
import colorpicker from '@cjdevstudios/bumbleuix-themes/nora/colorpicker';
import confirmdialog from '@cjdevstudios/bumbleuix-themes/nora/confirmdialog';
import confirmpopup from '@cjdevstudios/bumbleuix-themes/nora/confirmpopup';
import contextmenu from '@cjdevstudios/bumbleuix-themes/nora/contextmenu';
import datatable from '@cjdevstudios/bumbleuix-themes/nora/datatable';
import dataview from '@cjdevstudios/bumbleuix-themes/nora/dataview';
import datepicker from '@cjdevstudios/bumbleuix-themes/nora/datepicker';
import dialog from '@cjdevstudios/bumbleuix-themes/nora/dialog';
import divider from '@cjdevstudios/bumbleuix-themes/nora/divider';
import dock from '@cjdevstudios/bumbleuix-themes/nora/dock';
import drawer from '@cjdevstudios/bumbleuix-themes/nora/drawer';
import editor from '@cjdevstudios/bumbleuix-themes/nora/editor';
import fieldset from '@cjdevstudios/bumbleuix-themes/nora/fieldset';
import fileupload from '@cjdevstudios/bumbleuix-themes/nora/fileupload';
import floatlabel from '@cjdevstudios/bumbleuix-themes/nora/floatlabel';
import galleria from '@cjdevstudios/bumbleuix-themes/nora/galleria';
import iconfield from '@cjdevstudios/bumbleuix-themes/nora/iconfield';
import iftalabel from '@cjdevstudios/bumbleuix-themes/nora/iftalabel';
import image from '@cjdevstudios/bumbleuix-themes/nora/image';
import imagecompare from '@cjdevstudios/bumbleuix-themes/nora/imagecompare';
import inlinemessage from '@cjdevstudios/bumbleuix-themes/nora/inlinemessage';
import inplace from '@cjdevstudios/bumbleuix-themes/nora/inplace';
import inputchips from '@cjdevstudios/bumbleuix-themes/nora/inputchips';
import inputgroup from '@cjdevstudios/bumbleuix-themes/nora/inputgroup';
import inputnumber from '@cjdevstudios/bumbleuix-themes/nora/inputnumber';
import inputotp from '@cjdevstudios/bumbleuix-themes/nora/inputotp';
import inputtext from '@cjdevstudios/bumbleuix-themes/nora/inputtext';
import knob from '@cjdevstudios/bumbleuix-themes/nora/knob';
import listbox from '@cjdevstudios/bumbleuix-themes/nora/listbox';
import megamenu from '@cjdevstudios/bumbleuix-themes/nora/megamenu';
import menu from '@cjdevstudios/bumbleuix-themes/nora/menu';
import menubar from '@cjdevstudios/bumbleuix-themes/nora/menubar';
import message from '@cjdevstudios/bumbleuix-themes/nora/message';
import metergroup from '@cjdevstudios/bumbleuix-themes/nora/metergroup';
import multiselect from '@cjdevstudios/bumbleuix-themes/nora/multiselect';
import orderlist from '@cjdevstudios/bumbleuix-themes/nora/orderlist';
import organizationchart from '@cjdevstudios/bumbleuix-themes/nora/organizationchart';
import overlaybadge from '@cjdevstudios/bumbleuix-themes/nora/overlaybadge';
import paginator from '@cjdevstudios/bumbleuix-themes/nora/paginator';
import panel from '@cjdevstudios/bumbleuix-themes/nora/panel';
import panelmenu from '@cjdevstudios/bumbleuix-themes/nora/panelmenu';
import password from '@cjdevstudios/bumbleuix-themes/nora/password';
import picklist from '@cjdevstudios/bumbleuix-themes/nora/picklist';
import popover from '@cjdevstudios/bumbleuix-themes/nora/popover';
import progressbar from '@cjdevstudios/bumbleuix-themes/nora/progressbar';
import progressspinner from '@cjdevstudios/bumbleuix-themes/nora/progressspinner';
import radiobutton from '@cjdevstudios/bumbleuix-themes/nora/radiobutton';
import rating from '@cjdevstudios/bumbleuix-themes/nora/rating';
import ripple from '@cjdevstudios/bumbleuix-themes/nora/ripple';
import scrollpanel from '@cjdevstudios/bumbleuix-themes/nora/scrollpanel';
import select from '@cjdevstudios/bumbleuix-themes/nora/select';
import selectbutton from '@cjdevstudios/bumbleuix-themes/nora/selectbutton';
import skeleton from '@cjdevstudios/bumbleuix-themes/nora/skeleton';
import slider from '@cjdevstudios/bumbleuix-themes/nora/slider';
import speeddial from '@cjdevstudios/bumbleuix-themes/nora/speeddial';
import splitbutton from '@cjdevstudios/bumbleuix-themes/nora/splitbutton';
import splitter from '@cjdevstudios/bumbleuix-themes/nora/splitter';
import stepper from '@cjdevstudios/bumbleuix-themes/nora/stepper';
import steps from '@cjdevstudios/bumbleuix-themes/nora/steps';
import tabmenu from '@cjdevstudios/bumbleuix-themes/nora/tabmenu';
import tabs from '@cjdevstudios/bumbleuix-themes/nora/tabs';
import tabview from '@cjdevstudios/bumbleuix-themes/nora/tabview';
import tag from '@cjdevstudios/bumbleuix-themes/nora/tag';
import terminal from '@cjdevstudios/bumbleuix-themes/nora/terminal';
import textarea from '@cjdevstudios/bumbleuix-themes/nora/textarea';
import tieredmenu from '@cjdevstudios/bumbleuix-themes/nora/tieredmenu';
import timeline from '@cjdevstudios/bumbleuix-themes/nora/timeline';
import toast from '@cjdevstudios/bumbleuix-themes/nora/toast';
import togglebutton from '@cjdevstudios/bumbleuix-themes/nora/togglebutton';
import toggleswitch from '@cjdevstudios/bumbleuix-themes/nora/toggleswitch';
import toolbar from '@cjdevstudios/bumbleuix-themes/nora/toolbar';
import tooltip from '@cjdevstudios/bumbleuix-themes/nora/tooltip';
import tree from '@cjdevstudios/bumbleuix-themes/nora/tree';
import treeselect from '@cjdevstudios/bumbleuix-themes/nora/treeselect';
import treetable from '@cjdevstudios/bumbleuix-themes/nora/treetable';
import virtualscroller from '@cjdevstudios/bumbleuix-themes/nora/virtualscroller';

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
} satisfies Preset<NoraBaseDesignTokens>;
