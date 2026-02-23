import { type WidgetPlugin, PluginType } from '@deephaven/plugin';
import { vsGraph } from '@deephaven/icons';
import { PyinstrumentView } from './PyinstrumentView';

// Register the plugin with Deephaven
export const PyinstrumentPlugin: WidgetPlugin = {
  // The name of the plugin
  name: 'pyinstrument',
  // The type of plugin - this will generally be WIDGET_PLUGIN
  type: PluginType.WIDGET_PLUGIN,
  // The supported types for the plugin. This should match the value returned by `name`
  // in PyinstrumentType in pyinstrument_type.py
  supportedTypes: 'Pyinstrument',
  // The component to render for the plugin
  component: PyinstrumentView,
  // The icon to display for the plugin
  icon: vsGraph,
};

export default PyinstrumentPlugin;
