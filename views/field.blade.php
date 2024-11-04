@component($typeForm, get_defined_vars())
  <div data-controller="tinymce" data-theme="{{$theme ?? 'silver'}}" data-language="{{$language ?? 'en'}}"
       @if ($configExt) data-config-ext="{{ $configExt}}" @endif {{ $dataAttributes }}>
    <div class="tinymce border p-3" id="tinymce-wrapper-{{$id}}" style="height: {{ $attributes['height'] }}">
      {!! $value !!}
    </div>
  </div>
@endcomponent
