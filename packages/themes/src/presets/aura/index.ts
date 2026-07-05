import type { Preset } from '@cjdevstudios/bumbleuix-themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@cjdevstudios/bumbleuix-themes/aura/accordion';
import autocomplete from '@cjdevstudios/bumbleuix-themes/aura/autocomplete';
import avatar from '@cjdevstudios/bumbleuix-themes/aura/avatar';
import badge from '@cjdevstudios/bumbleuix-themes/aura/badge';
import base from '@cjdevstudios/bumbleuix-themes/aura/base';
import blockui from '@cjdevstudios/bumbleuix-themes/aura/blockui';
import breadcrumb from '@cjdevstudios/bumbleuix-themes/aura/breadcrumb';
import button from '@cjdevstudios/bumbleuix-themes/aura/button';
import card from '@cjdevstudios/bumbleuix-themes/aura/card';
import carousel from '@cjdevstudios/bumbleuix-themes/aura/carousel';
import cascadeselect from '@cjdevstudios/bumbleuix-themes/aura/cascadeselect';
import checkbox from '@cjdevstudios/bumbleuix-themes/aura/checkbox';
import chip from '@cjdevstudios/bumbleuix-themes/aura/chip';
import colorpicker from '@cjdevstudios/bumbleuix-themes/aura/colorpicker';
import confirmdialog from '@cjdevstudios/bumbleuix-themes/aura/confirmdialog';
import confirmpopup from '@cjdevstudios/bumbleuix-themes/aura/confirmpopup';
import contextmenu from '@cjdevstudios/bumbleuix-themes/aura/contextmenu';
import css from '@cjdevstudios/bumbleuix-themes/aura/css';
import datatable from '@cjdevstudios/bumbleuix-themes/aura/datatable';
import dataview from '@cjdevstudios/bumbleuix-themes/aura/dataview';
import datepicker from '@cjdevstudios/bumbleuix-themes/aura/datepicker';
import dialog from '@cjdevstudios/bumbleuix-themes/aura/dialog';
import divider from '@cjdevstudios/bumbleuix-themes/aura/divider';
import dock from '@cjdevstudios/bumbleuix-themes/aura/dock';
import drawer from '@cjdevstudios/bumbleuix-themes/aura/drawer';
import editor from '@cjdevstudios/bumbleuix-themes/aura/editor';
import fieldset from '@cjdevstudios/bumbleuix-themes/aura/fieldset';
import fileupload from '@cjdevstudios/bumbleuix-themes/aura/fileupload';
import floatlabel from '@cjdevstudios/bumbleuix-themes/aura/floatlabel';
import galleria from '@cjdevstudios/bumbleuix-themes/aura/galleria';
import iconfield from '@cjdevstudios/bumbleuix-themes/aura/iconfield';
import iftalabel from '@cjdevstudios/bumbleuix-themes/aura/iftalabel';
import image from '@cjdevstudios/bumbleuix-themes/aura/image';
import imagecompare from '@cjdevstudios/bumbleuix-themes/aura/imagecompare';
import inlinemessage from '@cjdevstudios/bumbleuix-themes/aura/inlinemessage';
import inplace from '@cjdevstudios/bumbleuix-themes/aura/inplace';
import inputchips from '@cjdevstudios/bumbleuix-themes/aura/inputchips';
import inputgroup from '@cjdevstudios/bumbleuix-themes/aura/inputgroup';
import inputnumber from '@cjdevstudios/bumbleuix-themes/aura/inputnumber';
import inputotp from '@cjdevstudios/bumbleuix-themes/aura/inputotp';
import inputtext from '@cjdevstudios/bumbleuix-themes/aura/inputtext';
import knob from '@cjdevstudios/bumbleuix-themes/aura/knob';
import listbox from '@cjdevstudios/bumbleuix-themes/aura/listbox';
import megamenu from '@cjdevstudios/bumbleuix-themes/aura/megamenu';
import menu from '@cjdevstudios/bumbleuix-themes/aura/menu';
import menubar from '@cjdevstudios/bumbleuix-themes/aura/menubar';
import message from '@cjdevstudios/bumbleuix-themes/aura/message';
import metergroup from '@cjdevstudios/bumbleuix-themes/aura/metergroup';
import multiselect from '@cjdevstudios/bumbleuix-themes/aura/multiselect';
import orderlist from '@cjdevstudios/bumbleuix-themes/aura/orderlist';
import organizationchart from '@cjdevstudios/bumbleuix-themes/aura/organizationchart';
import overlaybadge from '@cjdevstudios/bumbleuix-themes/aura/overlaybadge';
import paginator from '@cjdevstudios/bumbleuix-themes/aura/paginator';
import panel from '@cjdevstudios/bumbleuix-themes/aura/panel';
import panelmenu from '@cjdevstudios/bumbleuix-themes/aura/panelmenu';
import password from '@cjdevstudios/bumbleuix-themes/aura/password';
import picklist from '@cjdevstudios/bumbleuix-themes/aura/picklist';
import popover from '@cjdevstudios/bumbleuix-themes/aura/popover';
import progressbar from '@cjdevstudios/bumbleuix-themes/aura/progressbar';
import progressspinner from '@cjdevstudios/bumbleuix-themes/aura/progressspinner';
import radiobutton from '@cjdevstudios/bumbleuix-themes/aura/radiobutton';
import rating from '@cjdevstudios/bumbleuix-themes/aura/rating';
import ripple from '@cjdevstudios/bumbleuix-themes/aura/ripple';
import scrollpanel from '@cjdevstudios/bumbleuix-themes/aura/scrollpanel';
import select from '@cjdevstudios/bumbleuix-themes/aura/select';
import selectbutton from '@cjdevstudios/bumbleuix-themes/aura/selectbutton';
import skeleton from '@cjdevstudios/bumbleuix-themes/aura/skeleton';
import slider from '@cjdevstudios/bumbleuix-themes/aura/slider';
import speeddial from '@cjdevstudios/bumbleuix-themes/aura/speeddial';
import splitbutton from '@cjdevstudios/bumbleuix-themes/aura/splitbutton';
import splitter from '@cjdevstudios/bumbleuix-themes/aura/splitter';
import stepper from '@cjdevstudios/bumbleuix-themes/aura/stepper';
import steps from '@cjdevstudios/bumbleuix-themes/aura/steps';
import tabmenu from '@cjdevstudios/bumbleuix-themes/aura/tabmenu';
import tabs from '@cjdevstudios/bumbleuix-themes/aura/tabs';
import tabview from '@cjdevstudios/bumbleuix-themes/aura/tabview';
import tag from '@cjdevstudios/bumbleuix-themes/aura/tag';
import terminal from '@cjdevstudios/bumbleuix-themes/aura/terminal';
import textarea from '@cjdevstudios/bumbleuix-themes/aura/textarea';
import tieredmenu from '@cjdevstudios/bumbleuix-themes/aura/tieredmenu';
import timeline from '@cjdevstudios/bumbleuix-themes/aura/timeline';
import toast from '@cjdevstudios/bumbleuix-themes/aura/toast';
import togglebutton from '@cjdevstudios/bumbleuix-themes/aura/togglebutton';
import toggleswitch from '@cjdevstudios/bumbleuix-themes/aura/toggleswitch';
import toolbar from '@cjdevstudios/bumbleuix-themes/aura/toolbar';
import tooltip from '@cjdevstudios/bumbleuix-themes/aura/tooltip';
import tree from '@cjdevstudios/bumbleuix-themes/aura/tree';
import treeselect from '@cjdevstudios/bumbleuix-themes/aura/treeselect';
import treetable from '@cjdevstudios/bumbleuix-themes/aura/treetable';
import virtualscroller from '@cjdevstudios/bumbleuix-themes/aura/virtualscroller';

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
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
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
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
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
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    },
    css
} satisfies Preset<AuraBaseDesignTokens>;
