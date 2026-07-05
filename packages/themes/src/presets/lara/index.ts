import type { Preset } from '@cjdevstudios/bumbleuix-themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@cjdevstudios/bumbleuix-themes/lara/accordion';
import autocomplete from '@cjdevstudios/bumbleuix-themes/lara/autocomplete';
import avatar from '@cjdevstudios/bumbleuix-themes/lara/avatar';
import badge from '@cjdevstudios/bumbleuix-themes/lara/badge';
import base from '@cjdevstudios/bumbleuix-themes/lara/base';
import blockui from '@cjdevstudios/bumbleuix-themes/lara/blockui';
import breadcrumb from '@cjdevstudios/bumbleuix-themes/lara/breadcrumb';
import button from '@cjdevstudios/bumbleuix-themes/lara/button';
import card from '@cjdevstudios/bumbleuix-themes/lara/card';
import carousel from '@cjdevstudios/bumbleuix-themes/lara/carousel';
import cascadeselect from '@cjdevstudios/bumbleuix-themes/lara/cascadeselect';
import checkbox from '@cjdevstudios/bumbleuix-themes/lara/checkbox';
import chip from '@cjdevstudios/bumbleuix-themes/lara/chip';
import colorpicker from '@cjdevstudios/bumbleuix-themes/lara/colorpicker';
import confirmdialog from '@cjdevstudios/bumbleuix-themes/lara/confirmdialog';
import confirmpopup from '@cjdevstudios/bumbleuix-themes/lara/confirmpopup';
import contextmenu from '@cjdevstudios/bumbleuix-themes/lara/contextmenu';
import datatable from '@cjdevstudios/bumbleuix-themes/lara/datatable';
import dataview from '@cjdevstudios/bumbleuix-themes/lara/dataview';
import datepicker from '@cjdevstudios/bumbleuix-themes/lara/datepicker';
import dialog from '@cjdevstudios/bumbleuix-themes/lara/dialog';
import divider from '@cjdevstudios/bumbleuix-themes/lara/divider';
import dock from '@cjdevstudios/bumbleuix-themes/lara/dock';
import drawer from '@cjdevstudios/bumbleuix-themes/lara/drawer';
import editor from '@cjdevstudios/bumbleuix-themes/lara/editor';
import fieldset from '@cjdevstudios/bumbleuix-themes/lara/fieldset';
import fileupload from '@cjdevstudios/bumbleuix-themes/lara/fileupload';
import floatlabel from '@cjdevstudios/bumbleuix-themes/lara/floatlabel';
import galleria from '@cjdevstudios/bumbleuix-themes/lara/galleria';
import iconfield from '@cjdevstudios/bumbleuix-themes/lara/iconfield';
import iftalabel from '@cjdevstudios/bumbleuix-themes/lara/iftalabel';
import image from '@cjdevstudios/bumbleuix-themes/lara/image';
import imagecompare from '@cjdevstudios/bumbleuix-themes/lara/imagecompare';
import inlinemessage from '@cjdevstudios/bumbleuix-themes/lara/inlinemessage';
import inplace from '@cjdevstudios/bumbleuix-themes/lara/inplace';
import inputchips from '@cjdevstudios/bumbleuix-themes/lara/inputchips';
import inputgroup from '@cjdevstudios/bumbleuix-themes/lara/inputgroup';
import inputnumber from '@cjdevstudios/bumbleuix-themes/lara/inputnumber';
import inputotp from '@cjdevstudios/bumbleuix-themes/lara/inputotp';
import inputtext from '@cjdevstudios/bumbleuix-themes/lara/inputtext';
import knob from '@cjdevstudios/bumbleuix-themes/lara/knob';
import listbox from '@cjdevstudios/bumbleuix-themes/lara/listbox';
import megamenu from '@cjdevstudios/bumbleuix-themes/lara/megamenu';
import menu from '@cjdevstudios/bumbleuix-themes/lara/menu';
import menubar from '@cjdevstudios/bumbleuix-themes/lara/menubar';
import message from '@cjdevstudios/bumbleuix-themes/lara/message';
import metergroup from '@cjdevstudios/bumbleuix-themes/lara/metergroup';
import multiselect from '@cjdevstudios/bumbleuix-themes/lara/multiselect';
import orderlist from '@cjdevstudios/bumbleuix-themes/lara/orderlist';
import organizationchart from '@cjdevstudios/bumbleuix-themes/lara/organizationchart';
import overlaybadge from '@cjdevstudios/bumbleuix-themes/lara/overlaybadge';
import paginator from '@cjdevstudios/bumbleuix-themes/lara/paginator';
import panel from '@cjdevstudios/bumbleuix-themes/lara/panel';
import panelmenu from '@cjdevstudios/bumbleuix-themes/lara/panelmenu';
import password from '@cjdevstudios/bumbleuix-themes/lara/password';
import picklist from '@cjdevstudios/bumbleuix-themes/lara/picklist';
import popover from '@cjdevstudios/bumbleuix-themes/lara/popover';
import progressbar from '@cjdevstudios/bumbleuix-themes/lara/progressbar';
import progressspinner from '@cjdevstudios/bumbleuix-themes/lara/progressspinner';
import radiobutton from '@cjdevstudios/bumbleuix-themes/lara/radiobutton';
import rating from '@cjdevstudios/bumbleuix-themes/lara/rating';
import ripple from '@cjdevstudios/bumbleuix-themes/lara/ripple';
import scrollpanel from '@cjdevstudios/bumbleuix-themes/lara/scrollpanel';
import select from '@cjdevstudios/bumbleuix-themes/lara/select';
import selectbutton from '@cjdevstudios/bumbleuix-themes/lara/selectbutton';
import skeleton from '@cjdevstudios/bumbleuix-themes/lara/skeleton';
import slider from '@cjdevstudios/bumbleuix-themes/lara/slider';
import speeddial from '@cjdevstudios/bumbleuix-themes/lara/speeddial';
import splitbutton from '@cjdevstudios/bumbleuix-themes/lara/splitbutton';
import splitter from '@cjdevstudios/bumbleuix-themes/lara/splitter';
import stepper from '@cjdevstudios/bumbleuix-themes/lara/stepper';
import steps from '@cjdevstudios/bumbleuix-themes/lara/steps';
import tabmenu from '@cjdevstudios/bumbleuix-themes/lara/tabmenu';
import tabs from '@cjdevstudios/bumbleuix-themes/lara/tabs';
import tabview from '@cjdevstudios/bumbleuix-themes/lara/tabview';
import tag from '@cjdevstudios/bumbleuix-themes/lara/tag';
import terminal from '@cjdevstudios/bumbleuix-themes/lara/terminal';
import textarea from '@cjdevstudios/bumbleuix-themes/lara/textarea';
import tieredmenu from '@cjdevstudios/bumbleuix-themes/lara/tieredmenu';
import timeline from '@cjdevstudios/bumbleuix-themes/lara/timeline';
import toast from '@cjdevstudios/bumbleuix-themes/lara/toast';
import togglebutton from '@cjdevstudios/bumbleuix-themes/lara/togglebutton';
import toggleswitch from '@cjdevstudios/bumbleuix-themes/lara/toggleswitch';
import toolbar from '@cjdevstudios/bumbleuix-themes/lara/toolbar';
import tooltip from '@cjdevstudios/bumbleuix-themes/lara/tooltip';
import tree from '@cjdevstudios/bumbleuix-themes/lara/tree';
import treeselect from '@cjdevstudios/bumbleuix-themes/lara/treeselect';
import treetable from '@cjdevstudios/bumbleuix-themes/lara/treetable';
import virtualscroller from '@cjdevstudios/bumbleuix-themes/lara/virtualscroller';

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
} satisfies Preset<LaraBaseDesignTokens>;
